<?php

header('Content-Type: application/json');
$out = ['result' => false];
try {
    // $out['raw'] = file_get_contents('php://input');
    // $out['array'] = $_REQUEST;
    $name = filter_input(INPUT_POST, 'list_name', FILTER_DEFAULT);
    $email = filter_input(INPUT_POST, 'list_email', FILTER_VALIDATE_EMAIL);
    if (!$name || !$email)
        $out['error'] = 'invalid';
    else {
        // $out['data'] = ['name' => $name, 'email' => $email];
        try {
            file_put_contents(realpath(getcwd() . '/../data/list.txt'), '"' . str_replace('"', "'", $name) . '" <' . $email . '>' . PHP_EOL, FILE_APPEND | LOCK_EX);
            $out['result'] = true;
        } catch (Exception $e) {
            $out['error'] = 'file';
        }
    }
} catch (Exception $e) {
    $out['error'] = 'script';
}
if (isset($_POST['list_flag']))
    header('Location: ..?' . http_build_query($out) . '#list_anchor');
echo(json_encode($out));

?>
