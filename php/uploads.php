<?php

header('Content-Type: application/json');
$out = ['result' => false, 'post' => $_POST, 'files' => $_FILES];
try {
    $name = filter_input(INPUT_POST, 'upload_name', FILTER_DEFAULT);
    $email = filter_input(INPUT_POST, 'upload_email', FILTER_VALIDATE_EMAIL);
    $photog = filter_input(INPUT_POST, 'upload_photog', FILTER_DEFAULT);
    $descrip = filter_input(INPUT_POST, 'upload_descrip', FILTER_DEFAULT);
    $folder = filter_input(INPUT_POST, 'upload_folder', FILTER_DEFAULT);
    if ($folder && empty($_FILES)) {
        $out['error'] = 'nofile';
    } else if ($folder) {
        $file = realpath(getcwd() . '/../data/uploads') . '/' . basename($folder) . '/' . $_FILES['file']['name'];
        if (move_uploaded_file($_FILES['file']['tmp_name'], $file))
            $out['result'] = true;
        else
            $out['error'] = 'upload';
    } else if (!$name || !$email || !$photog || !$descrip) {
        $out['error'] = 'invalid';
    } else {
        try {
            $folder = preg_replace('/[^a-zA-Z0-9_-]+/', '-', $name . '_' . (new DateTime('now'))->format('Ymd-His-u'));
            $out['folder'] = $folder;
            $folder = realpath(getcwd() . '/../data/uploads') . '/' . $folder;
            mkdir($folder);
            $contents = $name . PHP_EOL . $email . PHP_EOL . 'By ' . $photog . PHP_EOL . $descrip . PHP_EOL;
            $file = $folder . '/info.txt';
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
if (isset($_POST['upload_flag'])) {
    $out['form'] = 'story';
    // header('Location: ..?' . http_build_query($out) . '#upload_anchor');
}
echo(json_encode($out));

?>
