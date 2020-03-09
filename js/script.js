
Dropzone.options.dropzone = {
    acceptedFiles: ['image/*','audio/*','video/*','text/*','application/ogg','application/x-mpegURL','application/pdf','application/zip','application/rar','application/gzip','application/tar','application/bzip','application/bzip2','application/7z','application/x-zip','application/x-rar','application/x-gzip','application/x-tar','application/x-gtar','application/x-tgz','application/x-bzip','application/x-bzip2','application/x-7z','application/x-compress','application/x-compressed','application/x-zip-compressed','application/x-rar-compressed','application/x-gzip-compressed','application/x-tar-compressed','application/x-gtar-compressed','application/x-tgz-compressed','application/x-bzip-compressed','application/x-bzip2-compressed','application/x-7z-compressed','application/vnd.rar','application/octet-stream','multipart/x-zip','multipart/x-rar','multipart/x-gzip','multipart/x-tar','multipart/x-gtar','multipart/x-tgz','multipart/x-bzip','multipart/x-bzip2','multipart/x-7z','application/msword','application/vnd.ms-word','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/msexcel','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/gpx+xml','application/vnd.google-earth.kml+xml','application/vnd.google-earth.kmz','application/rtf','application/javascript','.jpg','.jpeg','.jpe','.jif','.jfif','.jp2','.j2k','.jpf','.jpx','.jpm','.mj2','.j2000','.png','.gif','.tiff','.tif','.webp','.bmp','.wbmp','.dib','.ppm','.pgm','.pbm','.pnm','.heic','.heif','.svg','.svgz','.eps','.raw','.3fr','.ari','.arw','.bay','.braw','.cap','.cr2','.cr3','.crw','.data','.dcr','.dcs','.dng','.drf','.eip','.erf','.fff','.gpr','.iiq','.k25','.kdc','.mdc','.mef','.mos','.mrw','.nef','.nrw','.obm','.orf','.pef','.ptx','.pxn','.r3d','.raf','.rw2','.rwl','.rwz','.sr2','.srf','.srw','.tif','.x3f','.psd','.psb','.ai','.ind','.indd','.indt','.pdf','.exif','.txt','.rtf','.doc','.docx','.xls','.xlsx','.odt','.ods','.html','.htm','.js','.css','.gpx','.kmz','.kml','.zip','.gzip','.tar','.gtar','.rar','.bzip','.bzip2','.gz','.bz','.bz2','.7z','.tgz','.z','.tbz','.tbz2','.lz','.xz','.tlz','.txz','.zipx','.arj','.3g2','.3gp','.aac','.aif','.aif','.aifc','.aiff','.asf','.asx','.au','.avi','.cda','.f4v','.flac','.fli','.flv','.h261','.h263','.h264','.jpgm','.jpgv','.jpm','.m1v','.m2a','.m2ts','.m2v','.m3a','.m3u','.m4u','.m4v','.mid','.mid','.midi','.midi','.mj2','.mjp2','.mk3d','.mka','.mks','.mkv','.mng','.mov','.movie','.mp2','.mp2a','.mp3','.mp3','.mp4','.mp4a','.mpa','.mpe','.mpeg','.mpg','.mpg4','.mpga','.mts','.mxu','.oga','.ogg','.ogv','.ra','.ram','.rip','.rm','.smv','.snd','.spx','.swf','.viv','.vob','.wav','.weba','.webm','.wm','.wma','.wmv','.wmx','.wvx','.xm'].join(),
    maxFilesize: 1000,
    autoProcessQueue: false,
    addRemoveLinks: true,
    maxThumbnailFilesize: 15,
    filesizeBase: 1024
};

(new Promise(r => (document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', r) : r()))).then(() => {
    document.querySelector('#list_submit').addEventListener('click', onListSubmit);
    document.querySelector('#upload_submit').addEventListener('click', onUploadSubmit);
    document.querySelector('#story_submit').addEventListener('click', onStorySubmit);
});

function onListSubmit(ev) {
    // M.validate_field(document.querySelector('#list_name'));
    // M.validate_field(document.querySelector('#list_email'));
    // if (document.querySelector('#list_name').classList.contains('invalid') ||
    //     document.querySelector('#list_email').classList.contains('invalid')) {
    //     ev.preventDefault();
    //     return;
    // }
    submitForm(ev, 'list_form', ['list_name', 'list_email']);
    // if (!doValidate(fields)) {
    //     ev.preventDefault();
    //     return;
    // }
    // document.querySelector('#list_submit').disabled = true;
    // document.querySelector('#list_form').classList.add('working');
    // try {
    //     // data =
    //     //     'list_name=' + encodeURIComponent(document.querySelector('#list_name').value) + '&' +
    //     //     'list_email=' + encodeURIComponent(document.querySelector('#list_email').value);
    //     data = makePostData(fields);
    //     fetchy('php/list.php', {
    //         method: 'POST',
    //         body: data,
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     }).then(res => res.json()).then(data => {
    //         console.log(data);
    //         if (!data.result)
    //             return Promise.reject(data.error);
    //         document.querySelector('#list_form').classList.remove('working');
    //         document.querySelector('#list_form').classList.add('complete');
    //         delay(5000).then(() => {
    //             document.querySelector('#list_submit').disabled = false;
    //             document.querySelector('#list_form').classList.remove('complete');
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //         document.querySelector('#list_form').classList.remove('working');
    //         document.querySelector('#list_form').classList.add('error');
    //         document.querySelector('#list_form .again').addEventListener('click', ev => {
    //             ev.preventDefault();
    //             document.querySelector('#list_submit').disabled = false;
    //             document.querySelector('#list_form').classList.remove('error');
    //             ev.target.removeEventListener(ev.type, arguments.callee);
    //         }, { once: true });
    //     });
    //     ev.preventDefault();
    // } catch {
    //     console.log('failed');
    //     document.querySelector('#list_form').submit();
    // }
}

function onUploadSubmit(ev) {
    ev.preventDefault();
    document.querySelector('#upload_form').classList.add('working');
    /*TODO:
    Disable dropzone click/drop
    upload text & get folder id
    start dropzone upload with folder id
    (replace promise)
    */
    (new Promise(r => setTimeout(() => r(), 10000))).then(() => {
        document.querySelector('#upload_form').classList.remove('working');
        document.querySelector('#upload_form').classList.add('complete');
    });
}

function onStorySubmit(ev) {
    // M.validate_field(document.querySelector('#story_name'));
    // M.validate_field(document.querySelector('#story_email'));
    // M.validate_field(document.querySelector('#story_descrip'));
    // if (document.querySelector('#story_name').classList.contains('invalid') ||
    //     document.querySelector('#story_email').classList.contains('invalid') ||
    //     document.querySelector('#story_descrip').classList.contains('invalid')) {
    //     ev.preventDefault();
    //     return;
    // }
    submitForm(ev, 'story_form', ['story_name', 'story_email', 'story_descrip']);
    // if (!doValidate(fields)) {
    //     ev.preventDefault();
    //     return;
    // }
    // document.querySelector('#story_submit').disabled = true;
    // document.querySelector('#story_form').classList.add('working');
    // try {
    //     // data =
    //     //     'story_name=' + encodeURIComponent(document.querySelector('#story_name').value) + '&' +
    //     //     'story_email=' + encodeURIComponent(document.querySelector('#story_email').value) + '&' +
    //     //     'story_descrip=' + encodeURIComponent(document.querySelector('#story_descrip').value);
    //     data = makePostData(fields);
    //     fetch('php/story.php', {
    //         method: 'POST',
    //         body: data,
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     }).then(res => res.json()).then(data => {
    //         console.log(data);
    //         if (!data.result)
    //             return Promise.reject(data.error);
    //         document.querySelector('#story_form').classList.remove('working');
    //         document.querySelector('#story_form').classList.add('complete');
    //         delay(5000).then(() => {
    //             document.querySelector('#story_submit').disabled = false;
    //             document.querySelector('#story_form').classList.remove('complete');
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //         document.querySelector('#story_form').classList.remove('working');
    //         document.querySelector('#story_form').classList.add('error');
    //         document.querySelector('#story_form .again').addEventListener('click', ev => {
    //             ev.preventDefault();
    //             document.querySelector('#story_submit').disabled = false;
    //             document.querySelector('#story_form').classList.remove('error');
    //             ev.target.removeEventListener(ev.type, arguments.callee);
    //         }, { once: true });
    //     });
    //     ev.preventDefault();
    // } catch {
    //     console.log('failed');
    //     document.querySelector('#story_form').submit();
    // }
}

let delay = (to) => (new Promise(r => setTimeout(() => r(), to)));

function submitForm(ev, form, fields) {
    if (!doValidate(fields)) {
        ev.preventDefault();
        return;
    }
    try {
        setWorking(form);
        fetch(getUrl(form), {
            method: 'POST',
            body: makePostData(fields),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(res => res.json()).then(data => {
            if (!data.result)
                return Promise.reject(data.error);
            setComplete(form);
        }).catch(error => {
            console.log(error);
            setError(form);
        });
        ev.preventDefault();
    } catch {
        console.log('failed');
        doSubmit(form)
    }
}

function doValidate(fields) {
    fields.forEach(f => M.validate_field(document.querySelector('#' + f)));
    let status = fields.map(f => document.querySelector('#' + f).classList.contains('invalid'));
    return !status.some(Boolean);
}

function makePostData(fields) {
    let data = fields.map(f => f + '=' + encodeURIComponent(document.querySelector('#' + f).value));
    return data.join('&');
}

function setWorking(form) {
    document.querySelector('#' + form + ' button[type=submit]').disabled = true;
    document.querySelector('#' + form).classList.add('working');
}

function setComplete(form, timeout) {
    document.querySelector('#' + form).classList.remove('working');
    document.querySelector('#' + form).classList.add('complete');
    delay(timeout || 5000).then(() => {
        document.querySelector('#' + form + ' button[type=submit]').disabled = false;
        document.querySelector('#' + form).classList.remove('complete');
    })
}

function setError(form) {
    document.querySelector('#' + form).classList.remove('working');
    document.querySelector('#' + form).classList.add('error');
    document.querySelector('#' + form + ' .again').addEventListener('click', ev => {
        ev.preventDefault();
        document.querySelector('#' + form + ' button[type=submit]').disabled = false;
        document.querySelector('#' + form).classList.remove('error');
        ev.target.removeEventListener(ev.type, arguments.callee);
    }, { once: true });
}

function getUrl(form) {
    return document.querySelector('#' + form).action;
}

function doSubmit(form) {
    document.querySelector('#' + form).submit();

}
