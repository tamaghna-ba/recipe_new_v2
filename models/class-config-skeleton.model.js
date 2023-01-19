const classConfigBase = {
    "name": "Class Config Skeleton",
    "version": parseFloat("1.29"),
    "configdata": [
        {
            "version": 1.29,
            "added_on": "2022-09-09 14:12:21",
            "is_default": true,
            "added_by": "souvik.sa@imerit.net",
            "tool": "pct",
            "jsondata": {}
        },
    	{
            "version": 1.29,
            "added_on": "2022-04-14 18:15:31",
            "is_default": true,
            "added_by": "souvik.sa@imerit.net",
            "tool": "lightning",
            "jsondata": {
                "allPixelsAnnotation": true,
                "attribute": [],
                "note": false,
                "identity": true,
                "colorSelector": true,
                "multiSelectableComment": [],
                "selectableComment": [],
                "classification": {
                    "label": "Choose Class",
                    "classification": "type",
                    "htmlElement": "select",
                    "optional": false,
                    "entity": []
                },
                "annotation": {
                    "reload": true,
                    "drawable": {
                        "polygon": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": "0",
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "polyline": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "landmarking": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "pointLimit": 3,
                                "pointMinLimit": 3,
                                "pointMaxLimit": 3,
                                "radius": 3,
                                "color": [
                                    "#0000ff",
                                    "#ff0000",
                                    "#7affce",
                                    "#ffff00"
                                ],
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "radius": 3,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "color": [
                                    "0000ff",
                                    "#ff0000",
                                    "#7affce",
                                    "#ffff00"
                                ],
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "line": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {},
                                "gradient": [
                                    0,
                                    90,
                                    -90
                                ],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {},
                                "gradient": [],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "bbox": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "minEdge": 1,
                                "minArea": 0,
                                "minDiagonal": 15.03,
                                "metaInfo": {
                                    "diagonal": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "minEdge": 1,
                                "minArea": 0,
                                "minDiagonal": 15.03,
                                "metaInfo": {
                                    "diagonal": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            }
                        },
                        "keypoint": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWdith": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 20,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "radius": 20,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        }
                    }
                },
                "crossHairColor": "#00aa33",
                "gridPixels": {
                    "gridPixelY": 50,
                    "gridPixelX": 50
                },
                "goToConstraint": true,
                "undoRedo": false,
                "subBatchSize": 0,
                "predictionSwitch": false,
                "timeSpentTimer": 60000,
                "carryAnnotationState": true,
                "rubricEditable": false,
                "tool": "lightningV2",
                "loadingPage": true,
                "revertUIEnable": false,
                "imageRotationAngle": 10,
                "previewMode": true,
                "colorSelector": {
                    "enable": true,
                    "validator": "uniquecolor"
                },
                "skippedFramesNo": 0,
                "skipCheckBox": false,
                "parentChildTruncateEnable": true,
                "constraintFields": {
                    "uniqueness": true,
                    "imageLabel": false,
                    "dayOrNight": false,
                    "commentOptions": false
                },
                "rubricFeedback": [],
                "optimizedMode": true,
                "localCache": {
                    "dbname": "LightningDB",
                    "objectstore": "tasks",
                    "windowsize": 10
                },
                "prepopulateClassification": true,
                "submitFlags": {}
            }
        },
        {
            "version": 1.0,
            "added_on": "2021-06-22 12:28:31",
            "is_default": true,
            "added_by": "souvik.sa@imerit.net",
            "tool": "lightning",
            "jsondata": {
                "attribute": [],
                "note": false,
                "identity": true,
                "colorSelector": true,
                "multiSelectableComment": [],
                "selectableComment": [],
                "classification": {
                    "label": "Choose Class",
                    "classification": "type",
                    "htmlElement": "select",
                    "optional": false,
                    "entity": []
                },
                "annotation": {
                    "reload": true,
                    "drawable": {
                        "polygon": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": "0",
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "polyline": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "landmarking": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "pointLimit": 4,
                                "pointMinLimit": 4,
                                "pointMaxLimit": 4,
                                "radius": 3,
                                "color": [
                                    "#0000ff",
                                    "#ff0000",
                                    "#7affce",
                                    "#ffff00"
                                ],
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "radius": 3,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "color": [
                                    "0000ff",
                                    "#ff0000",
                                    "#7affce",
                                    "#ffff00"
                                ],
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "line": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {},
                                "gradient": [
                                    0,
                                    90,
                                    -90
                                ],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {},
                                "gradient": [],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "bbox": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "minEdge": 1,
                                "minArea": 0,
                                "minDiagonal": 15.03,
                                "metaInfo": {
                                    "diagonal": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "minEdge": 1,
                                "minArea": 0,
                                "minDiagonal": 15.03,
                                "metaInfo": {
                                    "diagonal": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            }
                        },
                        "keypoint": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWdith": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 20,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "radius": 20,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        }
                    }
                },
                "crossHairColor": "#00aa33",
                "gridPixel": 25,
                "gridPixelX": 50,
                "gridPixelY": 50,
                "goToConstraint": true,
                "undoRedo": true,
                "timeSpentTimer": 60000,
                "image_padding": 10000,
                "subBatchSize": 0,
                "predictionSwitch": false,
                "objectDetection": false,
                "loadingPage": true,
                "imageRotationAngle": 10,
                "skippedFramesNo": 0,
                "skipCheckBox": false,
                "previewMode": true,
                "carryAnnotationState": true,
                "parentChildTruncateEnable": true,
                "constraintFields": {
                    "uniqueness": true,
                    "imageLabel": false,
                    "dayOrNight": false,
                    "commentOptions": false
                },
                "shouldNotCarry": [],
                "localCache": {
                    "dbname": "LightningDB",
                    "objectstore": "tasks",
                    "windowsize": 20
                },
                "prepopulateClassification": true,
                "submitFlags": {}
            }
        },
        {
            "version": 1.0,
            "added_on": "2021-06-22 12:28:31",
            "is_default": true,
            "added_by": "souvik.sa@imerit.net",
            "tool": "odin",
            "jsondata": {
                "rubricEditable": true,
                "rubricFeedback": [
                    {
                        "label": "All class labels satisfy acceptance criteria for the class in the context of the site (see GL document)",
                        "issueLevel": "Major",
                        "color": "#FF0000",
                        "selectDropDown": [
                            {
                                "name": "selectType",
                                "dataPlaceholder": "--Select--",
                                "default": "",
                                "options": [
                                    {
                                        "value": "Pass",
                                        "text": "Pass"
                                    },
                                    {
                                        "value": "Fail",
                                        "text": "Fail"
                                    },
                                    {
                                        "value": "Fixed",
                                        "text": "Fixed"
                                    },
                                    {
                                        "value": "NA",
                                        "text": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "Pre-identified objects are precisely captured within 2 pixels",
                        "issueLevel": "Major",
                        "color": "#FF0000",
                        "selectDropDown": [
                            {
                                "name": "selectType",
                                "dataPlaceholder": "--Select--",
                                "default": "",
                                "options": [
                                    {
                                        "value": "Pass",
                                        "text": "Pass"
                                    },
                                    {
                                        "value": "Fail",
                                        "text": "Fail"
                                    },
                                    {
                                        "value": "Fixed",
                                        "text": "Fixed"
                                    },
                                    {
                                        "value": "NA",
                                        "text": "NA"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "attribute": [],
                "note": false,
                "identity": false,
                "colorSelector": {
                    "enable": true,
                    "validator": "uniquecolor"
                },
                "multiSelectableComment": [],
                "selectableComment": [],
                "eraserType": [
                    "canvaspolygon",
                    "canvaswand",
                    "brush",
                    "bucket",
                    "magneticlasso",
                    "superpixels"
                ],
                "classification": {
                    "label": "",
                    "classification": "type",
                    "htmlElement": "select",
                    "optional": false,
                    "entity": []
                },
                "annotation": {
                    "reload": true,
                    "drawable": {
                        "polygon": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": false,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": "0",
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "polyline": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": false,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "landmarking": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "pointLimit": 4,
                                "pointMinLimit": 4,
                                "pointMaxLimit": 4,
                                "radius": 3,
                                "color": [
                                    "#0000ff",
                                    "#ff0000",
                                    "#ffa500",
                                    "#ffff00"
                                ],
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "radius": 3,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "color": [
                                    "0000ff",
                                    "#ff0000",
                                    "#ffa500",
                                    "#ffff00"
                                ],
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "line": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {},
                                "gradient": [
                                    0,
                                    90,
                                    -90
                                ],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {},
                                "gradient": [],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "bbox": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "minEdge": 10,
                                "minArea": 10,
                                "minDiagonal": 10,
                                "metaInfo": {
                                    "diagonal": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "minEdge": 10,
                                "minArea": 10,
                                "minDiagonal": 10,
                                "metaInfo": {
                                    "diagonal": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            }
                        },
                        "keypoint": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": false,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 1,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "radius": 3,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "canvaspolygon": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "canvasbbox": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "brush": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "bucket": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "magneticLasso": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "superPixels": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        }
                    }
                },
                "crossHairColor": "#00aa33",
                "gridPixel": 50,
                "goToConstraint": false,
                "undoRedo": true,
                "segmentCalculation": false,
                "predictionSwitch": false,
                "subBatchSize": 0,
                "objectDetection": false,
                "loadingPage": true,
                "imageRotationAngle": 10,
                "skippedFramesNo": 0,
                "skipCheckBox": false,
                "previewMode": true,
                "timeSpentTimer": 60000,
                "constraintFields": {
                    "uniqueness": true,
                    "imageLabel": false,
                    "dayOrNight": false,
                    "commentOptions": false
                },
                "outlierThreshold": 500,
                "localCache": {
                    "dbname": "LightningDB",
                    "objectstore": "tasks",
                    "windowsize": 2000
                },
                "prepopulateClassification": true,
                "keyFrameOnly": true,
                "revertUIEnable": false,
                "submitFlags": {}
            }
        },
        {
            "version": 1.29,
            "added_on": "2021-06-22 12:28:31",
            "is_default": true,
            "added_by": "souvik.sa@imerit.net",
            "tool": "odin",
            "jsondata": {
                "allPixelsAnnotation": true,
                "rubricFeedback": [
                    {
                        "label": "This image must have atleast two instances",
                        "issueLevel": "Major",
                        "color": "#FF0000",
                        "selectDropDown": [
                            {
                                "name": "selectType",
                                "dataPlaceholder": "--Select--",
                                "default": "",
                                "options": [
                                    {
                                        "value": "Pass",
                                        "text": "Pass"
                                    },
                                    {
                                        "value": "Fail",
                                        "text": "Fail"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "This image must have atleast two class",
                        "issueLevel": "Minor",
                        "color": "#00FF00",
                        "selectDropDown": [
                            {
                                "name": "selectType",
                                "dataPlaceholder": "--Select--",
                                "default": "",
                                "options": [
                                    {
                                        "value": "Pass",
                                        "text": "Pass"
                                    },
                                    {
                                        "value": "Fail",
                                        "text": "Fail"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "This image must have atleast ten Insatnces",
                        "issueLevel": "minor",
                        "color": "#00FF00",
                        "selectDropDown": [
                            {
                                "name": "selectType",
                                "dataPlaceholder": "--Select--",
                                "default": "",
                                "options": [
                                    {
                                        "value": "Pass",
                                        "text": "Pass"
                                    },
                                    {
                                        "value": "Fail",
                                        "text": "Fail"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "attribute": [],
                "note": false,
                "identity": false,
                "colorSelector": {
                    "enable": true,
                    "validator": "uniquecolor"
                },
                "multiSelectableComment": [],
                "selectableComment": [],
                "eraserType": [
                    "canvaspolygon",
                    "canvaswand",
                    "brush",
                    "bucket",
                    "magneticlasso",
                    "superpixels"
                ],
                "classification": {
                    "label": "",
                    "classification": "type",
                    "htmlElement": "select",
                    "optional": false,
                    "entity": []
                },
                "annotation": {
                    "reload": true,
                    "drawable": {
                        "polygon": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": false,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": "0",
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "polyline": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": false,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "landmarking": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "pointLimit": 3,
                                "pointMinLimit": 3,
                                "pointMaxLimit": 3,
                                "radius": 3,
                                "color": [
                                    "#0000ff",
                                    "#ff0000",
                                    "#ffa500",
                                    "#ffff00"
                                ],
                                "metaInfo": {
                                    "vertexCount": true
                                },
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "strokeOpacity": 0.0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "radius": 3,
                                "metaInfo": {
                                    "vertexCount": false
                                },
                                "color": [
                                    "0000ff",
                                    "#ff0000",
                                    "#ffa500",
                                    "#ffff00"
                                ],
                                "customDrawModule": "smartAgDrawable",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "line": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "metaInfo": {},
                                "gradient": [
                                    0,
                                    90,
                                    -90
                                ],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "metaInfo": {},
                                "gradient": [],
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "bbox": {
                            "normal": {
                                "fillOpacity": 0.0,
                                "strokeWidth": 2,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "truncateEnable": true,
                                "minEdge": 10,
                                "minArea": 10,
                                "minDiagonal": 10,
                                "metaInfo": {
                                    "diagonal": true
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 0.7,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "truncateEnable": false,
                                "minEdge": 10,
                                "minArea": 10,
                                "minDiagonal": 10,
                                "metaInfo": {
                                    "diagonal": false
                                },
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 10,
                                    "rightPadding": 10,
                                    "topPadding": 5,
                                    "bottomPadding": 5
                                }
                            }
                        },
                        "keypoint": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": false,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            },
                            "viewOnly": {
                                "fillOpacity": 1,
                                "strokeWidth": 0,
                                "crosshairEnable": false,
                                "radius": 3,
                                "animationZoomFactor": 5,
                                "customDrawModule": "",
                                "customDrawModuleParams": {
                                    "leftPadding": 0,
                                    "rightPadding": 0,
                                    "topPadding": 0,
                                    "bottomPadding": 0
                                }
                            }
                        },
                        "canvaspolygon": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "canvaswand": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "canvasbbox": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "brush": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "bucket": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "magneticLasso": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        },
                        "superPixels": {
                            "normal": {
                                "fillOpacity": 1,
                                "strokeWdith": 4,
                                "crosshairEnable": true,
                                "crosshair": {
                                    "xcenter": 1,
                                    "ycenter": 1,
                                    "xspan": 3,
                                    "yspan": 3,
                                    "spanWidth": 1,
                                    "extensionWidth": 0.5
                                },
                                "radius": 3,
                                "animationZoomFactor": 5
                            }
                        }
                    }
                },
                "crossHairColor": "#00aa33",
                "gridPixel": 50,
                "goToConstraint": false,
                "undoRedo": true,
                "segmentCalculation": false,
                "predictionSwitch": false,
                "gridPixels": {
                    "gridPixelY": 50,
                    "gridPixelX": 50
                },
                "subBatchSize": 0,
                "objectDetection": false,
                "loadingPage": true,
                "imageRotationAngle": 10,
                "skippedFramesNo": 0,
                "skipCheckBox": false,
                "previewMode": true,
                "rubricEditable": false,
                "tool": "odin",
                "optimizedMode": true,
                "parentChildTruncateEnable": true,
                "constraintFields": {
                    "uniqueness": true,
                    "imageLabel": false,
                    "dayOrNight": false,
                    "commentOptions": false
                },
                "outlierThreshold": 500,
                "timeSpentTimer": 60000,
                "localCache": {
                    "dbname": "OdinDB",
                    "objectstore": "tasks",
                    "windowsize": 2000
                },
                "prepopulateClassification": true,
                "keyFrameOnly": false,
                "revertUIEnable": false,
                "deliverableType": "cocoFormat",
                "submitFlags": {}
            }
        }
    ]
}

module.exports = classConfigBase
