angular.module('app')


.constant('JQ_CONFIG', {
    raphael: ['plugins/raphael/raphael-min.js'],
    morris: ['plugins/morris/morris.min.js', 'plugins/morris/morris.css'],
    sparkline: ['plugins/sparkline/jquery.sparkline.min.js'],
    jvectormap: [
        'plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        'plugins/jvectormap/jquery-jvectormap-1.2.2.css'
    ],
    knob: ['plugins/knob/jquery.knob.js'],
    moment: ['plugins/moment/moment.min.js'],
    daterangepicker: [
        'plugins/daterangepicker/daterangepicker.js',
        'plugins/daterangepicker/daterangepicker-bs3.css'
    ],
    datepicker: [
        'plugins/datepicker/bootstrap-datepicker.js',
        'plugins/datepicker/datepicker3.css'
    ],
    wysi: [
        'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
    ],
    slimscroll: ['plugins/slimScroll/jquery.slimscroll.min.js'],
    fastclick: ['plugins/fastclick/fastclick.min.js'],
    adminlte: [
        'assets/js/app.ui.min.js',
    ],
    landing: [
        'assets/css/landing-page.css'
    ]
})

.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    // We configure ocLazyLoad to use the lib script.js as the async loader
    $ocLazyLoadProvider.config({
        debug: true,
        events: true,
        modules: [{
            name: 'messages',
            files: ['plugins/angular/angular-messages.js']
        }, {
            name: 'chart',
            files: [
                'plugins/angular/chart/angular-chart.css',
                'plugins/angular/chart/Chart.js',
                'plugins/angular/chart/angular-chart.js'
            ]
        }]
    });
}]);
