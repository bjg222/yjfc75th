<?php

header('Content-Type: application/json');
$out = ['result' => false];
try {
    $name = filter_input(INPUT_POST, 'story_name', FILTER_DEFAULT);
    $email = filter_input(INPUT_POST, 'story_email', FILTER_VALIDATE_EMAIL);
    $descrip = filter_input(INPUT_POST, 'story_descrip', FILTER_DEFAULT);
    if (!$name || !$email || !$descrip)
        $out['error'] = 'invalid';
    else {
        try {
            $file = preg_replace('/[^a-zA-Z0-9_-]+/', '-', $name . '_' . (new DateTime('now'))->format('Ymd-His-u'));
            $file = realpath(getcwd() . '/../data/stories') . '/' . $file . '.txt';
            $contents = $name . PHP_EOL . $email . PHP_EOL . $descrip . PHP_EOL;
            // $out['file'] = $file;
            // $out['contents'] = $contents;
            file_put_contents($file, $contents);
            $out['result'] = true;
        } catch (Exception $e) {
            $out['error'] = 'file';
        }
    }
} catch (Exception $e) {
    $out['error'] = 'script';
}
if (isset($_POST['story_flag'])) {
    $out['form'] = 'story';
    header('Location: ..?' . http_build_query($out) . '#story_anchor');
}
echo(json_encode($out));

?>
