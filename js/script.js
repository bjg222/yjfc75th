
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
    ev.preventDefault();
    document.querySelector('#list_form').classList.add('working');
    //TODO: make AJAX call to upload (replace promise)
    (new Promise(r => setTimeout(() => r(), 2000))).then(() => {
        document.querySelector('#list_form').classList.remove('working');
        document.querySelector('#list_form').classList.add('complete');
    });
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
    ev.preventDefault();
    document.querySelector('#story_form').classList.add('working');
    //TODO: make AJAX call to upload (replace promise)
    (new Promise(r => setTimeout(() => r(), 2000))).then(() => {
        document.querySelector('#story_form').classList.remove('working');
        document.querySelector('#story_form').classList.add('complete');
    });
}
