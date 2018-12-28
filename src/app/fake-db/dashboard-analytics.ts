export class AnalyticsDashboardDb
{
    public static widgets = {
        widget1: {
            chartType: 'line',
            datasets : {
                '2016': [
                    {
                        label: 'Sales',
                        data : [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                        fill : 'start'

                    }
                ],
                '2017': [
                    {
                        label: 'Sales',
                        data : [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                        fill : 'start'

                    }
                ],
                '2018': [
                    {
                        label: 'Sales',
                        data : [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                        fill : 'start'

                    }
                ]

            },
            labels   : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            colors   : [
                {
                    borderColor              : '#42a5f5',
                    backgroundColor          : '#42a5f5',
                    pointBackgroundColor     : '#1e88e5',
                    pointHoverBackgroundColor: '#1e88e5',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top  : 32,
                        left : 32,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    },
                    line : {
                        tension: 0
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display       : false,
                                drawBorder    : false,
                                tickMarkLength: 18
                            },
                            ticks    : {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min     : 1.5,
                                max     : 5,
                                stepSize: 0.5
                            }
                        }
                    ]
                },
                plugins            : {
                    filler      : {
                        propagate: false
                    },
                    xLabelsOnTop: {
                        active: true
                    }
                }
            }
        },
        widget2: {
            conversion: {
                value   : 492,
                ofTarget: 13
            },
            chartType : 'bar',
            datasets  : [
                {
                    label: 'Conversion',
                    data : [221, 428, 492, 471, 413, 344, 294]
                }
            ],
            labels    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            colors    : [
                {
                    borderColor    : '#42a5f5',
                    backgroundColor: '#42a5f5'
                }
            ],
            options   : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 100,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget3: {
            impressions: {
                value   : '87k',
                ofTarget: 12
            },
            chartType  : 'line',
            datasets   : [
                {
                    label: 'Impression',
                    data : [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
                    fill : false
                }
            ],
            labels     : ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
            colors     : [
                {
                    borderColor: '#5c84f1'
                }
            ],
            options    : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                elements           : {
                    point: {
                        radius          : 2,
                        borderWidth     : 1,
                        hoverRadius     : 2,
                        hoverBorderWidth: 1
                    },
                    line : {
                        tension: 0
                    }
                },
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget4: {
            visits   : {
                value   : 882,
                ofTarget: -9
            },
            chartType: 'bar',
            datasets : [
                {
                    label: 'Visits',
                    data : [432, 428, 327, 363, 456, 267, 231]
                }
            ],
            labels   : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            colors   : [
                {
                    borderColor    : '#f44336',
                    backgroundColor: '#f44336'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 150,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget5: {
            chartType: 'line',
            datasets : {
                'yesterday': [
                    {
                        label: 'Visitors',
                        data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
                        fill : 'start'

                    },
                    {
                        label: 'Page views',
                        data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                        fill : 'start'
                    }
                ],
                'today'    : [
                    {
                        label: 'Visitors',
                        data : [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290],
                        fill : 'start'
                    },
                    {
                        label: 'Page Views',
                        data : [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800],
                        fill : 'start'

                    }
                ]
            },
            labels   : ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'],
            colors   : [
                {
                    borderColor              : '#3949ab',
                    backgroundColor          : '#3949ab',
                    pointBackgroundColor     : '#3949ab',
                    pointHoverBackgroundColor: '#3949ab',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                },
                {
                    borderColor              : 'rgba(30, 136, 229, 0.87)',
                    backgroundColor          : 'rgba(30, 136, 229, 0.87)',
                    pointBackgroundColor     : 'rgba(30, 136, 229, 0.87)',
                    pointHoverBackgroundColor: 'rgba(30, 136, 229, 0.87)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips           : {
                    position : 'nearest',
                    mode     : 'index',
                    intersect: false
                },
                layout             : {
                    padding: {
                        left : 24,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            ticks    : {
                                fontColor: 'rgba(0,0,0,0.54)'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                tickMarkLength: 16
                            },
                            ticks    : {
                                stepSize: 1000
                            }
                        }
                    ]
                },
                plugins            : {
                    filler: {
                        propagate: false
                    }
                }
            }
        },
        widget6: {
            markers: [
                {
                    lat  : 52,
                    lng  : -73,
                    label: '120'
                },
                {
                    lat  : 37,
                    lng  : -104,
                    label: '498'
                },
                {
                    lat  : 21,
                    lng  : -7,
                    label: '443'
                },
                {
                    lat  : 55,
                    lng  : 75,
                    label: '332'
                },
                {
                    lat  : 51,
                    lng  : 7,
                    label: '50'
                },
                {
                    lat  : 31,
                    lng  : 12,
                    label: '221'
                },
                {
                    lat  : 45,
                    lng  : 44,
                    label: '455'
                },
                {
                    lat  : -26,
                    lng  : 134,
                    label: '231'
                },
                {
                    lat  : -9,
                    lng  : -60,
                    label: '67'
                },
                {
                    lat  : 33,
                    lng  : 104,
                    label: '665'
                }
            ],
            styles : [
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers'    : [
                        {
                            'color': '#444444'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#f2f2f2'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'saturation': -100
                        },
                        {
                            'lightness': 45
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#039be5'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                }
            ]
        },
        widget7: {
            scheme : {
                domain: ['#4867d2', '#5c84f1', '#89a9f4']
            },
            devices: [
                {
                    name  : 'Desktop',
                    value : 92.8,
                    change: -0.6
                },
                {
                    name  : 'Mobile',
                    value : 6.1,
                    change: 0.7
                },
                {
                    name  : 'Tablet',
                    value : 1.1,
                    change: 0.1
                }
            ]
        },
        widget8: {
            scheme : {
                domain: ['#5c84f1']
            },
            today  : '12,540',
            change : {
                value     : 321,
                percentage: 2.05
            },
            data   : [
                {
                    name  : 'Sales',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 540
                        },
                        {
                            name : 'Jan 2',
                            value: 539
                        },
                        {
                            name : 'Jan 3',
                            value: 538
                        },
                        {
                            name : 'Jan 4',
                            value: 539
                        },
                        {
                            name : 'Jan 5',
                            value: 540
                        },
                        {
                            name : 'Jan 6',
                            value: 539
                        },
                        {
                            name : 'Jan 7',
                            value: 540
                        }
                    ]
                }
            ],
            dataMin: 538,
            dataMax: 541
        },
        widget9: {
            rows: [
                {
                    title     : 'Holiday Travel',
                    clicks    : 3621,
                    conversion: 90
                },
                {
                    title     : 'Get Away Deals',
                    clicks    : 703,
                    conversion: 7
                },
                {
                    title     : 'Airfare',
                    clicks    : 532,
                    conversion: 0
                },
                {
                    title     : 'Vacation',
                    clicks    : 201,
                    conversion: 8
                },
                {
                    title     : 'Hotels',
                    clicks    : 94,
                    conversion: 4
                }
            ]
        }
    };

    public static mysurveys = [
        {
            'id'        : '9620100008',
            'title'     : 'Employee Engagement',
            'slug'      : 'create-high-performence-teams',
            'category'  : 'HR',
            'completion': 30,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '7019998562',
            'title'     : 'Employee Benefits',
            'slug'      : 'learn-more-from-Employees',
            'category'  : 'HR',
            'completion': 60,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Nov 01, 2017'
        },
        {
            'id'        : '9406630330',
            'title'     : 'Manager Satisfaction Survey',
            'slug'      : 'create-high-engaged-teams',
            'category'  : 'HR',
            'completion': 120,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9620100009',
            'title'     : 'Employee Facilities Survey',
            'slug'      : 'keep-sensitive-data-safe-and-private',
            'category'  : 'HR',
            'completion': 45,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9635252431',
            'title'     : 'Exit Survey',
            'slug'      : 'create-best-place-to-work-for',
            'category'  : 'HR',
            'completion': 30,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9826076890',
            'title'     : 'Product Launch Survey',
            'slug'      : 'we-are-listening',
            'category'  : 'Customer',
            'completion': 120,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9826225260',
            'title'     : 'Sales Experience',
            'slug'      : 'happy-customers',
            'category'  : 'Customers',
            'completion': 30,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9345689656',
            'title'     : 'After Sales Satisfaction',
            'slug'      : 'after-sales-satisfaction',
            'category'  : 'Customer',
            'completion': 45,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9354275456',
            'title'     : 'Online Marketing',
            'slug'      : 'engage-customers-online',
            'category'  : 'Marketing',
            'completion': 90,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9389097687',
            'title'     : 'Above the Line',
            'your'      : 'create-best-above-the-line-activities',
            'category'  : 'Marketing',
            'completion': 90,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9765425676',
            'title'     : 'Below the Line',
            'slug'      : 'creating-impact-through-below-the-line-activities',
            'category'  : 'Marketing',
            'completion': 90,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9723587690',
            'title'     : 'Student Engagement Survey',
            'slug'      : 'create-well-engaged-education-institute',
            'category'  : 'Education',
            'completion': 45,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9827019876',
            'title'     : 'Parent Engagement Survey',
            'slug'      : 'engage-parents-for-improvisations',
            'category'  : 'Education',
            'completion': 60,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9829062567',
            'title'     : 'Reasearh Survey',
            'slug'      : 'track-research-inputs-online',
            'category'  : 'Education',
            'completion': 45,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9826576890',
            'title'     : 'Subject Assessments',
            'slug'      : 'build-school-assessment-online',
            'category'  : 'Education',
            'completion': 45,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9720900009',
            'title'     : 'Online Quize',
            'slug'      : 'create-online-qize-to-build-capabilities',
            'category'  : 'Student',
            'completion': 30,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9346215267',
            'title'     : 'Samister Exam',
            'slug'      : 'samister-exam-online',
            'category'  : 'Education',
            'completion': 60,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        },
        {
            'id'        : '9630988886',
            'title'     : 'Yearly Exam',
            'slug'      : 'yearly-exam-/-assessments-online',
            'category'  : 'Education',
            'completion': 90,
            'created'   : 'Jun 28, 2017',
            'updated'   : 'Jun 28, 2017'
        }
    ];

    public static surveycategories = [
        {
            'id'   : 0,
            'value': 'HR',
            'label': 'HR'
        },
        {
            'id'   : 1,
            'value': 'Customer',
            'label': 'Customer'
        },
        {
            'id'   : 2,
            'value': 'Marketing',
            'label': 'Marketing'
        },
        {
            'id'   : 3,
            'value': 'Education',
            'label': 'Education'
        }
    ];

    private static surveydemoSteps = [
        {
            'title'  : 'Introduction',
            'content': '<h1>Step 1 - Introduction</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Get the sample code',
            'content': '<h1>Step 2 - Get the sample code</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Create a Firebase project and Set up your app',
            'content': '<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Install the Firebase Command Line Interface',
            'content': '<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Deploy and run the web app',
            'content': '<h1>Step 5 - Deploy and run the web app</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'The Functions Directory',
            'content': '<h1>Step 6 - The Functions Directory</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Import the Cloud Functions and Firebase Admin modules',
            'content': '<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Welcome New Users',
            'content': '<h1>Step 8 - Welcome New Users</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Images moderation',
            'content': '<h1>Step 9 - Images moderation</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'New Message Notifications',
            'content': '<h1>Step 10 - New Message Notifications</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Congratulations!',
            'content': '<h1>Step 11 - Congratulations!</h1>' +
            '<br>' +
            'You\'ve built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!'
        }
    ];

    public static surveycourse = [
        {
            'id'         : '9620100008',
            'title'      : 'Employee Engagement',
            'slug'       : 'create-high-performence-teams',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'HR',
            'completion' : 30,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '7019998562',
            'title'      : 'Employee Benefits',
            'slug'       : 'learn-more-from-Employees',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'HR',
            'completion' : 60,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Nov 01, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9406630330',
            'title'      : 'Manager Satisfaction Survey',
            'slug'       : 'create-high-engaged-teams',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'HR',
            'completion' : 120,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9620100009',
            'title'      : 'Employee Facilities Survey',
            'slug'       : 'keep-sensitive-data-safe-and-private',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'HR',
            'lcompletion': 45,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9635252431',
            'title'      : 'Exit Survey',
            'slug'       : 'create-best-place-to-work-for',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'HR',
            'completion' : 30,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9826076890',
            'title'      : 'Product Launch Survey',
            'slug'       : 'we-are-listening',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Customer',
            'completion' : 120,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9826225260',
            'title'      : 'Sales Experience',
            'slug'       : 'happy-customers',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Customers',
            'completion' : 30,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9345689656',
            'title'      : 'After Sales Satisfaction',
            'slug'       : 'after-sales-satisfaction',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Customer',
            'completion' : 45,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9354275456',
            'title'      : 'Online Marketing',
            'slug'       : 'engage-customers-online',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Marketing',
            'completion' : 90,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9389097687',
            'title'      : 'Above the Line',
            'your'       : 'create-best-above-the-line-activities',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Marketing',
            'completion' : 90,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9765425676',
            'title'      : 'Below the Line',
            'slug'       : 'creating-impact-through-below-the-line-activities',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Marketing',
            'completion' : 90,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9723587690',
            'title'      : 'Student Engagement Survey',
            'slug'       : 'create-well-engaged-education-institute',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Education',
            'completion' : 45,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9827019876',
            'title'      : 'Parent Engagement Survey',
            'slug'       : 'engage-parents-for-improvisations',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Education',
            'completion' : 60,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9829062567',
            'title'      : 'Reasearh Survey',
            'slug'       : 'track-research-inputs-online',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Education',
            'completion' : 45,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9826576890',
            'title'      : 'Subject Assessments',
            'slug'       : 'build-school-assessment-online',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Education',
            'completion' : 45,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9720900009',
            'title'      : 'Online Quize',
            'slug'       : 'create-online-qize-to-build-capabilities',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Student',
            'completion' : 30,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9346215267',
            'title'      : 'Samister Exam',
            'slug'       : 'samister-exam-online',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Education',
            'completion' : 60,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        },
        {
            'id'         : '9630988886',
            'title'      : 'Yearly Exam',
            'slug'       : 'yearly-exam-/-assessments-online',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'Education',
            'completion' : 90,
            'totalSteps' : 11,
            'created'    : 'Jun 28, 2017',
            'updated'    : 'Jun 28, 2017',
            'steps'      : AnalyticsDashboardDb.surveydemoSteps
        }
    ];

}
