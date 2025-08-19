(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",sans-serif"),
						"color" : nexacro.ColorObject("#000000"),
						"border" : nexacro.BorderObject("0px none")
					},
					"contents" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"titleicon" :
			{
				"parent" :
				{
					"titlebar" :
					{
						"parent" :
						{
							"MainFrame" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon_nexacro17.ico')")
									}
								}
							}
						}
					},
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_TF_TitleIcon.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
							}
						}
					}
				}
			},
			"ButtonControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				},
				"class" :
				[
					{
						"cellbutton" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px")
								}
							}
						}
					}
				]
			},
			"fileuploaditem" :
			{
				"parent" :
				{
					"FileUpload" :
					{
						"self" :
						{
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c2c2c2"),
										"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							}
						}
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#ffffff")
					},
					"mouseover" :
					{
					},
					"enabled" :
					{
						"color" : nexacro.ColorObject("#ffffff"),
						"font" : nexacro.FontObject("15px/normal \"SpoqaHanSans-Regular\"")
					}
				},
				"class" :
				[
					{
						"btn_sty01" :
						{
							"self" :
							{
								"mouseover" :
								{
								},
								"focused" :
								{
								},
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_sty02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959"),
									"border" : nexacro.BorderObject("1px solid #ced0d3")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"border" : nexacro.BorderObject("1px solid #f38f00")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"border" : nexacro.BorderObject("1px solid #f38f00")
								}
							}
						}
					},
					{
						"btn_styLarge" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_sty03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959"),
									"border" : nexacro.BorderObject("1px solid #ced0d3")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"border" : nexacro.BorderObject("1px solid #91c24a")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"border" : nexacro.BorderObject("1px solid #91c24a")
								}
							}
						}
					},
					{
						"btn_sty04" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959"),
									"border" : nexacro.BorderObject("1px solid #ced0d3")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"border" : nexacro.BorderObject("1px solid #e04112")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"border" : nexacro.BorderObject("1px solid #e04112")
								}
							}
						}
					},
					{
						"btn_sty05" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959"),
									"border" : nexacro.BorderObject("1px solid #ced0d3")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"border" : nexacro.BorderObject("1px solid #0054d6")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"border" : nexacro.BorderObject("1px solid #0054d6")
								}
							}
						}
					},
					{
						"btn_sty06" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_styTxt" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000")
								}
							}
						}
					},
					{
						"gnbList02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000"),
									"padding" : nexacro.PaddingObject("0px 10px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"gnbList03" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000"),
									"padding" : nexacro.PaddingObject("0px 10px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"gnbList04" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000"),
									"padding" : nexacro.PaddingObject("0px 10px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"gnbList05" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"gnbList01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"gnbList06" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"gnbList07" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"innerList01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"innerList02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"innerList03" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_sty07" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_sty08" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_sty09" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_sty10" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#000000")
								}
							}
						}
					},
					{
						"btn_mainService01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Regular\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService02Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("12px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService01Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("12px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Regular\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Regular\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService03Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("12px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService04" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Regular\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0053d6"),
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_mainService04Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("12px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_conBot01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("20px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_conBot01Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("17px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_conBot02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("20px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_conBot02Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("17px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_conBot03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("20px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_conBot03Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("17px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"btn_first" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px"),
									"color" : nexacro.ColorObject("transparent")
								},
								"mouseover" :
								{
								},
								"focused" :
								{
								}
							}
						}
					},
					{
						"btn_before" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px"),
									"color" : nexacro.ColorObject("transparent")
								},
								"mouseover" :
								{
								},
								"focused" :
								{
								}
							}
						}
					},
					{
						"btn_after" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px"),
									"color" : nexacro.ColorObject("transparent")
								},
								"mouseover" :
								{
								},
								"focused" :
								{
								}
							}
						}
					},
					{
						"btn_last" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px"),
									"color" : nexacro.ColorObject("transparent")
								},
								"mouseover" :
								{
								},
								"focused" :
								{
								}
							}
						}
					},
					{
						"btn_pagNum" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#949494"),
									"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Regular\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("15px \"SpoqaHanSans-Bold\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("15px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("15px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_main01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								},
								"mouseover" :
								{
								},
								"focused" :
								{
								}
							}
						}
					},
					{
						"btn_main01Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								}
							}
						}
					},
					{
						"btn_main02Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								}
							}
						}
					},
					{
						"btn_main03Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								}
							}
						}
					},
					{
						"btn_main04Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								}
							}
						}
					},
					{
						"btn_main05Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								}
							}
						}
					},
					{
						"btn_main06Mo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								}
							}
						}
					},
					{
						"btn_main02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								},
								"focused" :
								{
								},
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"btn_main03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								},
								"focused" :
								{
								},
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"btn_main04" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								},
								"focused" :
								{
								},
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"btn_main05" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								},
								"focused" :
								{
								},
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"btn_main06" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("transparent")
								},
								"focused" :
								{
								},
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"list_2depth01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"list_2depth02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#f38f00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"list_2depth03" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#91c24a"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"list_2depth04" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"list_3depth" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\""),
									"color" : nexacro.ColorObject("#595959")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0054d6")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0054d6")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0054d6")
								}
							}
						}
					},
					{
						"btn_loginAfter" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_login" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_loginMo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("12px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"btn_loginAfterMo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0054d6"),
									"font" : nexacro.FontObject("12px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					}
				]
			},
			"FileDownload" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#ffffff")
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"CalendarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar_D.png')")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_v2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O_v2.png')")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O_v2.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P_v2.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P_v2.png')")
							},
							"disabled" :
							{
							}
						}
					},
					"ComboControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_v2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O_v2.png')")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O_v2.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P_v2.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P_v2.png')")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_O.png')")
					},
					"readonly" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_S.png')")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_DS.png')")
					}
				},
				"class" :
				[
					{
						"fontC59" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959")
								}
							}
						}
					}
				]
			},
			"CheckBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_O.png')")
					},
					"readonly" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_S.png')")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_DS.png')")
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#595959"),
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"ComboControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#595959"),
						"border" : nexacro.BorderObject("1px solid #dcdcdc")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#595959"),
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"font" : nexacro.FontObject("12px \"SpoqaHanSans-Regular\"")
							}
						}
					},
					"ComboControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#595959"),
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"font" : nexacro.FontObject("12px \"SpoqaHanSans-Regular\"")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px Gulim"),
										"color" : nexacro.ColorObject("#555555")
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px Gulim"),
										"color" : nexacro.ColorObject("#555555")
									}
								}
							}
						}
					}
				}
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #dcdcdc"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
						"color" : nexacro.ColorObject("#595959")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#595959")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#595959")
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dcdcdc"),
										"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
										"color" : nexacro.ColorObject("#595959")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #5a86cd")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #5a86cd")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#595959")
									}
								}
							}
						}
					}
				}
			},
			"EditControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#595959")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#595959")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"MaskEditControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#595959")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#595959")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"TextAreaControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#595959")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"SpinControl" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #a5a5a5,0px none,1px solid #a5a5a5,0px none")
					}
				},
				"class" :
				[
					{
						"default" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #125dae,1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2")
								}
							}
						}
					},
					{
						"grid_sty02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #f38f00,0px none,1px solid #f38f00,0px none")
								}
							}
						}
					},
					{
						"grid_sty02_01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #f38f00,0px none,1px solid #f38f00,0px none")
								}
							}
						}
					},
					{
						"grid_sty03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #6fa71d,0px none,1px solid #6fa71d,0px none")
								}
							}
						}
					},
					{
						"grid_sty03_01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #6fa71d,0px none,1px solid #6fa71d,0px none")
								}
							}
						}
					},
					{
						"grid_sty04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #e04112,0px none,1px solid #e04112,0px none")
								}
							}
						}
					},
					{
						"grid_sty04_01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #e04112,0px none,1px solid #e04112,0px none")
								}
							}
						}
					},
					{
						"treeArea" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #4b5057,0px none,1px solid #b5bbc2")
								}
							}
						}
					}
				]
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#000000"),
												"padding" : nexacro.PaddingObject("4px"),
												"font" : nexacro.FontObject("normal 14px/normal \"SpoqaHanSans-Regular\""),
												"border" : nexacro.BorderObject("0px none,1px solid #a5a5a,1px solid #a5a5a5,0px none")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#000000")
											}
										},
										"class" :
										[
											{
												"default" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#2f2f2f"),
															"padding" : nexacro.PaddingObject("4px"),
															"font" : nexacro.FontObject("bold 12px Gulim"),
															"border" : nexacro.BorderObject("1px solid #cacaca")
														}
													}
												}
											},
											{
												"grid_sty02" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e3c89c,1px solid #e3c89c,0px none")
														}
													}
												}
											},
											{
												"grid_sty02_01" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e3c89c,1px solid #e3c89c,0px none")
														}
													}
												}
											},
											{
												"grid_sty03" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #d0e39c,1px solid #d0e39c,0px none")
														}
													}
												}
											},
											{
												"grid_sty03_01" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #d0e39c,1px solid #d0e39c,0px none")
														}
													}
												}
											},
											{
												"grid_sty04" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e6c9c0,1px solid #e6c9c0,0px none")
														}
													}
												}
											},
											{
												"grid_sty04_01" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e6c9c0,1px solid #e6c9c0,0px none")
														}
													}
												}
											}
										]
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"disabled_selected" :
											{
											},
											"enabled" :
											{
												"color" : nexacro.ColorObject("#595959"),
												"padding" : nexacro.PaddingObject("4px"),
												"font" : nexacro.FontObject("normal 14px/normal \"SpoqaHanSans-Regular\""),
												"border" : nexacro.BorderObject("0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#999999")
											},
											"blinked" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										},
										"class" :
										[
											{
												"default" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#666666"),
															"padding" : nexacro.PaddingObject("4px"),
															"border" : nexacro.BorderObject("1px solid #dbdee2")
														}
													}
												}
											},
											{
												"treeArea" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#666666"),
															"padding" : nexacro.PaddingObject("4px 4px 4px 20px"),
															"border" : nexacro.BorderObject("0px")
														}
													}
												}
											},
											{
												"grid_sty02" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e3c89c,1px solid #e3c89c,0px none")
														}
													}
												}
											},
											{
												"grid_sty02_01" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e3c89c,1px solid #e3c89c,0px none")
														},
														"selected" :
														{
														}
													}
												}
											},
											{
												"grid_sty03" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #d0e39c,1px solid #d0e39c,0px none")
														}
													}
												}
											},
											{
												"grid_sty03_01" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #d0e39c,1px solid #d0e39c,0px none")
														},
														"selected" :
														{
														}
													}
												}
											},
											{
												"grid_sty04" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e6c9c0,1px solid #e6c9c0,0px none")
														}
													}
												}
											},
											{
												"grid_sty04_01" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e6c9c0,1px solid #e6c9c0,0px none")
														},
														"selected" :
														{
														}
													}
												}
											},
											{
												"grid_pdShort" :
												{
													"self" :
													{
														"enabled" :
														{
															"padding" : nexacro.PaddingObject("4px")
														}
													}
												}
											}
										]
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("normal 14px/normal \"SpoqaHanSans-Regular\""),
												"color" : nexacro.ColorObject("#000000"),
												"padding" : nexacro.PaddingObject("4px"),
												"border" : nexacro.BorderObject("0px none,1px solid #a5a5a5,0px none,0px none")
											}
										},
										"class" :
										[
											{
												"grid_sty02" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e3c89c,0px none,0px none")
														}
													}
												}
											},
											{
												"grid_sty03" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #d0e39c,0px none,0px none")
														}
													}
												}
											},
											{
												"grid_sty04" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none,1px solid #e6c9c0,0px none,0px none")
														}
													}
												}
											}
										]
									}
								}
							}
						}
					},
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									}
								}
							}
						}
					},
					"detail" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									}
								}
							}
						}
					}
				},
				"class" :
				[
					{
						"c_red" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#de3128")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"alignLeftLock" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"padding" : nexacro.PaddingObject("0px 0px 0px 50px")
														},
														"selected" :
														{
														},
														"mouseover" :
														{
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				]
			},
			"subcell" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("#666666"),
														"border" : nexacro.BorderObject("1px solid #dbdee2"),
														"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
													},
													"mouseover" :
													{
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#999999")
													},
													"selected" :
													{
													},
													"blinked" :
													{
														"color" : nexacro.ColorObject("#ffffff")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"selection" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"Grid" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("2px solid #125dae")
									}
								}
							}
						}
					}
				}
			},
			"summary" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c1c2, 0px none, 0px none, 0px none")
							}
						},
						"class" :
						[
							{
								"grid_sty02" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #e3c89c, 0px none, 0px none, 0px none")
										}
									}
								}
							},
							{
								"grid_sty03" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #d0e39c, 0px none, 0px none, 0px none")
										}
									}
								}
							},
							{
								"grid_sty04" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #e6c9c0, 0px none, 0px none, 0px none")
										}
									}
								}
							}
						]
					}
				}
			},
			"hscrollbar" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"vscrollbar" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #b1b1b1")
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #c2c2c2")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"pushed" :
							{
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bbbbbb"),
								"border" : nexacro.BorderObject("1px solid #d9d9d9")
							}
						},
						"class" :
						[
							{
								"cellBtn" :
								{
									"self" :
									{
										"enabled" :
										{
											"color" : nexacro.ColorObject("#555555"),
											"border" : nexacro.BorderObject("1px solid #c2c2c2")
										}
									}
								}
							}
						]
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #c2c2c2")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"pushed" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bbbbbb"),
								"border" : nexacro.BorderObject("1px solid #d9d9d9")
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"cellcombo" :
							{
								"parent" :
								{
									"GridCellControl" :
									{
										"self" :
										{
											"mouseover" :
											{
											}
										}
									},
									"ListViewCellControl" :
									{
										"self" :
										{
											"mouseover" :
											{
											}
										}
									}
								}
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					},
					"ListBoxControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"cellexpandbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					}
				}
			},
			"cellmaskedit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"cellprogressbar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"treeitemtext" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Regular\""),
										"color" : nexacro.ColorObject("#666666")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#999999")
									}
								}
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Treeexpand.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Treecollapse.png')")
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treeitem.png')")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treeexpand.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treecollapse.png')")
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px dotted #909090")
							}
						}
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d6d4d5")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 4px 0px 4px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"imagetext" :
			{
				"parent" :
				{
					"ImageViewer" :
					{
						"self" :
						{
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"Menu" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 0px 15px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_D.png')")
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_D.png')")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 8px 10px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev_D.png')")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
									}
								}
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 15px 0px 5px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_D.png')")
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_D.png')")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 10px 8px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext_D.png')")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
									}
								}
							}
						}
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 13px Gulim"),
								"color" : nexacro.ColorObject("#ffffff"),
								"padding" : nexacro.PaddingObject("0px 30px 0px 30px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c7d4e2")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
							}
						},
						"class" :
						[
							{
								"gnb_main" :
								{
									"self" :
									{
										"enabled" :
										{
											"color" : nexacro.ColorObject("#000000"),
											"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Regular\"")
										},
										"mouseover" :
										{
										},
										"selected" :
										{
										}
									}
								}
							},
							{
								"gnb_menu" :
								{
									"self" :
									{
										"enabled" :
										{
											"color" : nexacro.ColorObject("#000000"),
											"font" : nexacro.FontObject("16px \"SpoqaHanSans-Regular\"")
										},
										"mouseover" :
										{
											"color" : nexacro.ColorObject("#0054d6")
										},
										"focused" :
										{
											"color" : nexacro.ColorObject("#0054d6")
										},
										"selected" :
										{
											"color" : nexacro.ColorObject("#0054d6")
										}
									}
								}
							}
						]
					}
				}
			},
			"menupopupmenu" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #034389")
							}
						}
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#c3e0ff"),
										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #2065ae, 0px none"),
										"padding" : nexacro.PaddingObject("3px 8px 3px 8px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#2665af")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#c3e0ff"),
												"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#2665af")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#6d95cc"),
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#4577b9")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#aaaaaa"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#4577b9")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#aaaaaa"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#4577b9")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							}
						}
					}
				}
			},
			"Plugin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"PluginControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px Gulim"),
						"color" : nexacro.ColorObject("#555555"),
						"border" : nexacro.BorderObject("1px solid #b5b5b5")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px Gulim"),
						"color" : nexacro.ColorObject("#555555"),
						"border" : nexacro.BorderObject("1px solid #b5b5b5")
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
					}
				}
			},
			"ProgressBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					}
				}
			},
			"Radio" :
			{
				"class" :
				[
					{
						"fontC59" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959")
								}
							}
						}
					}
				]
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_S.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_D.png')")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_DS.png')")
							}
						}
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
					}
				}
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 9px")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 14px Tahoma"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 14px Tahoma"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"tableTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("normal 20px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"footerList" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"title_t2" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("24px/normal \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"title_t3" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("20px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"mainNewsTit" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Light\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none,0px none,1px solid #000000")
								}
							}
						}
					},
					{
						"mainNewsTitMo" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("12px \"SpoqaHanSans-Light\"")
								}
							}
						}
					},
					{
						"mainNewsDate" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("18px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"mainNewsDateMo" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("12px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"state_result" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#d31c00")
								}
							}
						}
					},
					{
						"reser_st01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ed6a00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_st02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#77ad28"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_st03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_obj01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ed6a00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_obj02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#77ad28"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_obj03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_date01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ed6a00"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_date02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#77ad28"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"reser_date03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 37px")
								}
							}
						}
					},
					{
						"txt_mainImgTxt" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("26px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"txt_mainImgTxtMo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("14px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"txt_mainImgDate" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("29px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"txt_mainImgDateMo" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Bold\"")
								}
							}
						}
					},
					{
						"boxDesc" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px"),
									"color" : nexacro.ColorObject("#595959")
								}
							}
						}
					},
					{
						"boxDescCol" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none"),
									"color" : nexacro.ColorObject("#595959")
								}
							}
						}
					},
					{
						"boxTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								}
							}
						}
					},
					{
						"boxTitleBlue" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								}
							}
						}
					},
					{
						"boxTitleCol" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none")
								}
							}
						}
					},
					{
						"boxTitleManda" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
								}
							}
						}
					},
					{
						"popupTitRed" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#e04112"),
									"border" : nexacro.BorderObject("0px none,0px none,1px solid #e04112"),
									"font" : nexacro.FontObject("16px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"popupDesc" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959"),
									"font" : nexacro.FontObject("14px/normal \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"fontC59" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959")
								}
							}
						}
					},
					{
						"fontCOrange" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ed6a00")
								}
							}
						}
					},
					{
						"fontCGreen" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#659e13")
								}
							}
						}
					},
					{
						"fontCRed" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#e04112")
								}
							}
						}
					},
					{
						"step01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#dedede"),
									"font" : nexacro.FontObject("20px \"SpoqaHanSans-Regular\""),
									"border" : nexacro.BorderObject("0px none,1px solid #f2f4f7,0px none,0px none")
								}
							}
						}
					},
					{
						"last" :
						{
							"class" :
							[
								{
									"step01" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none")
											}
										}
									}
								}
							]
						}
					},
					{
						"on01" :
						{
							"class" :
							[
								{
									"step01" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#ffffff"),
												"border" : nexacro.BorderObject("0px"),
												"font" : nexacro.FontObject("20px \"SpoqaHanSans-Bold\"")
											}
										}
									}
								}
							]
						}
					},
					{
						"on02" :
						{
							"class" :
							[
								{
									"step01" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#ffffff"),
												"border" : nexacro.BorderObject("0px"),
												"font" : nexacro.FontObject("20px \"SpoqaHanSans-Bold\"")
											}
										}
									}
								}
							]
						}
					},
					{
						"on03" :
						{
							"class" :
							[
								{
									"step01" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#ffffff"),
												"border" : nexacro.BorderObject("0px"),
												"font" : nexacro.FontObject("20px \"SpoqaHanSans-Bold\"")
											}
										}
									}
								}
							]
						}
					},
					{
						"chart01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#66797e")
								}
							}
						}
					},
					{
						"chart02" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#7eacf5")
								}
							}
						}
					},
					{
						"chart03" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0e5dd8")
								}
							}
						}
					},
					{
						"chart04" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#00b3ed")
								}
							}
						}
					},
					{
						"chart05" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#7cc441")
								}
							}
						}
					}
				]
			},
			"StaticControl" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"WebBrowser" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"WebBrowserControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"Div" :
			{
				"class" :
				[
					{
						"stepArea" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #ced0d3")
								}
							}
						}
					},
					{
						"sel_box" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #90adda,1px solid #90adda,1px solid #90adda")
								}
							}
						}
					},
					{
						"noticeWrap" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #4b5057,0px none,0px none")
								}
							}
						}
					},
					{
						"noticeTit" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,1px solid #a5a5a5,0px none,0px none")
								}
							}
						}
					},
					{
						"noticeDesc" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#595959")
								}
							}
						}
					},
					{
						"divForm" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #a5a5a5")
								}
							}
						}
					},
					{
						"divFormR" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #a5a5a5")
								}
							}
						}
					},
					{
						"sub_research01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #f2c16b"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"sub_research02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #b9dc87"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"sub_research03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #fcc1af"),
									"font" : nexacro.FontObject("16px \"SpoqaHanSans-Regular\"")
								}
							}
						}
					},
					{
						"sel_box02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #efa66b,1px solid #ced0d3,1px solid #ced0d3")
								}
							}
						}
					},
					{
						"sel_box03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #6fa71d,1px solid #ced0d3,1px solid #ced0d3")
								}
							}
						}
					},
					{
						"sel_box04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #e04112,1px solid #ced0d3,1px solid #ced0d3")
								}
							}
						}
					},
					{
						"rowGrid" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #4b5057,0px none,0px none")
								}
							}
						}
					},
					{
						"colGrid" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #4b5057,0px none,0px none")
								}
							}
						}
					},
					{
						"reser_desc01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("3px solid #e16f00")
								}
							}
						}
					},
					{
						"reser_desc03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("3px solid #cc2f00")
								}
							}
						}
					},
					{
						"reser_desc02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("3px solid #5b9309")
								}
							}
						}
					}
				]
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cfcfcf, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#333333"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1")
							},
							"focused" :
							{
								"color" : nexacro.ColorObject("#dee4ef")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#dee4ef"),
								"border" : nexacro.BorderObject("1px solid #1055a1")
							},
							"focused_selected" :
							{
								"color" : nexacro.ColorObject("#dee4ef"),
								"border" : nexacro.BorderObject("1px solid #1055a1")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#ababab")
							},
							"disabled_selected" :
							{
								"border" : nexacro.BorderObject("1px solid #c7d4e2")
							}
						}
					}
				}
			},
			"tabbuttonitemtext" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c8c8c8")
									}
								}
							}
						}
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabextra.png')")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabextra_S.png'")
									}
								}
							}
						}
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("5px 0px 0px 0px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#cdcdcd")
							}
						}
					}
				}
			},
			"yearstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14px Tahoma"),
										"color" : nexacro.ColorObject("#ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"monthstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14px Tahoma"),
										"color" : nexacro.ColorObject("#ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #125dae, 1px solid #697888, 1px solid #697888, 1px solid #697888")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #98a6b5")
							}
						}
					},
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"weekband" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#48afff")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ff7986")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#269bee")
									},
									"mouseover_saturday" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ff4c5e")
									},
									"mouseover_sunday" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#989898")
									},
									"mouseover_trailingday" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#cdcdcd")
									},
									"disabled_selected" :
									{
									}
								}
							}
						}
					}
				}
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_D.png')")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_D.png')")
							}
						}
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_D.png')")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_D.png')")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a8a8a8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a8a8a8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8")
							}
						}
					},
					"VScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"HScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #afaeae, 1px solid #d2d0d0, 1px solid #d2d0d0, 1px solid #d2d0d0")
							}
						}
					}
				}
			},
			"resizegrip" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_grip.png\")")
							}
						}
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("bold 12px Gulim"),
						"color" : nexacro.ColorObject("#ffffff"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_D.png')")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_D.png')")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_D.png')")
							}
						}
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_D.png')")
							}
						}
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							}
						}
					}
				}
			},
			"ListView" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"detail" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"expandbar" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c2c2c2")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#bbbbbb"),
										"border" : nexacro.BorderObject("1px solid #d9d9d9")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_expand.png')")
									}
								}
							}
						}
					}
				}
			},
			"PopupDiv" :
			{
				"class" :
				[
					{
						"popupDiv00" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c0d8dc")
								}
							}
						}
					}
				]
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_DS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_v2.png")] = { width:11, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O_v2.png")] = { width:11, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P_v2.png")] = { width:11, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/ico_lock.png")] = { width:14, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/ico_file.png")] = { width:10, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treeexpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treecollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeexpand.png")] = { width:14, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treecollapse.png")] = { width:14, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menu_O.png")] = { width:19, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand2.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_F.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_O.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleIcon.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainMore.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService01.png")] = { width:101, height:101 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService02Mo.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService01Mo.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService02.png")] = { width:101, height:101 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService03.png")] = { width:101, height:101 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService03Mo.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService04.png")] = { width:101, height:101 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService04Mo.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService_on01.png")] = { width:119, height:112 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService_on02.png")] = { width:119, height:116 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService_on03.png")] = { width:119, height:115 };
		imgcache[nexacro._getImageLocation("theme://images/btn_mainService_on04.png")] = { width:119, height:117 };
		imgcache[nexacro._getImageLocation("theme://images/img_botMenu01.jpg")] = { width:390, height:258 };
		imgcache[nexacro._getImageLocation("theme://images/img_botMenu01Mo.jpg")] = { width:290, height:192 };
		imgcache[nexacro._getImageLocation("theme://images/img_botMenu02.jpg")] = { width:390, height:258 };
		imgcache[nexacro._getImageLocation("theme://images/img_botMenu02Mo.jpg")] = { width:290, height:192 };
		imgcache[nexacro._getImageLocation("theme://images/img_botMenu03.jpg")] = { width:390, height:258 };
		imgcache[nexacro._getImageLocation("theme://images/img_botMenu03Mo.jpg")] = { width:290, height:192 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reSt01.png")] = { width:26, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reSt02.png")] = { width:26, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reSt03.png")] = { width:26, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reObj01.png")] = { width:17, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reObj02.png")] = { width:17, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reObj03.png")] = { width:17, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reDate01.png")] = { width:25, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reDate02.png")] = { width:25, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_reDate03.png")] = { width:25, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/btn_first.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/btn_before.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/btn_after.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/btn_last.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainImgTxt.png")] = { width:84, height:83 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainImgTxtMo.png")] = { width:42, height:42 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain01.png")] = { width:97, height:85 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain01Mo.png")] = { width:90, height:104 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain02Mo.png")] = { width:108, height:106 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain03Mo.png")] = { width:110, height:105 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain04Mo.png")] = { width:105, height:105 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain05Mo.png")] = { width:77, height:103 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain06Mo.png")] = { width:109, height:105 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain02.png")] = { width:99, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain03.png")] = { width:100, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain04.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain05.png")] = { width:102, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain06.png")] = { width:92, height:92 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over01.png")] = { width:131, height:190 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over02.png")] = { width:180, height:194 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over03.png")] = { width:160, height:194 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over04.png")] = { width:141, height:194 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over05.png")] = { width:113, height:194 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over06.png")] = { width:159, height:195 };
		imgcache[nexacro._getImageLocation("theme://images/bul_mandatory.png")] = { width:6, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/ico_Qes.png")] = { width:30, height:31 };
		imgcache[nexacro._getImageLocation("theme://images/ico_QesRed.png")] = { width:30, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/bul_list01.png")] = { width:220, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/bul_list02.png")] = { width:220, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/bul_list03.png")] = { width:220, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/bul_list04.png")] = { width:220, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/ico_step.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/ico_step_on01.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/ico_step_on02.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/ico_step_on03.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/btn_epki.png")] = { width:601, height:80 };
		imgcache[nexacro._getImageLocation("theme://images/btn_epki_on.png")] = { width:601, height:80 };
		imgcache[nexacro._getImageLocation("theme://images/btn_sms.png")] = { width:600, height:80 };
		imgcache[nexacro._getImageLocation("theme://images/btn_sms_on.png")] = { width:600, height:80 };
		imgcache[nexacro._getImageLocation("theme://images/ico_loginAfter.png")] = { width:38, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_login.png")] = { width:32, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_loginMo.png")] = { width:20, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_loginAfterMo.png")] = { width:20, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over01Mo.png")] = { width:90, height:104 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over02Mo.png")] = { width:108, height:106 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over03Mo.png")] = { width:110, height:105 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over04Mo.png")] = { width:105, height:105 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over05Mo.png")] = { width:77, height:103 };
		imgcache[nexacro._getImageLocation("theme://images/bg_btnMain_over06Mo.png")] = { width:109, height:105 };
		imgcache[nexacro._getImageLocation("theme://images/bg_more.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/bg_moreMo.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/bg_search.png")] = { width:1310, height:158 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra_S.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/bul_3depth.png")] = { width:5, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/bul_chartBar01.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/bul_chartBar02.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/bul_chartBar03.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/bul_chartBar04.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/bul_chartBar05.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/bul_innerList.png")] = { width:1, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/bul_mainList.png")] = { width:13, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/ico_cal.png")] = { width:25, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_control.png")] = { width:38, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_controlMo.png")] = { width:23, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_home.png")] = { width:81, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/ico_layerClose.png")] = { width:31, height:31 };
		imgcache[nexacro._getImageLocation("theme://images/ico_layerSearch.png")] = { width:36, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList01.png")] = { width:97, height:85 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList01Mo.png")] = { width:48, height:42 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList02.png")] = { width:99, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList02Mo.png")] = { width:50, height:45 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList03.png")] = { width:100, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList03Mo.png")] = { width:50, height:45 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList04.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList04Mo.png")] = { width:45, height:45 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList05.png")] = { width:102, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList05Mo.png")] = { width:51, height:45 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList06.png")] = { width:92, height:92 };
		imgcache[nexacro._getImageLocation("theme://images/ico_mainList06Mo.png")] = { width:46, height:46 };
		imgcache[nexacro._getImageLocation("theme://images/ico_menu.png")] = { width:35, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_menuMo.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_myPage.png")] = { width:28, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_myPageMo.png")] = { width:18, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/ico_num.png")] = { width:23, height:23 };
		imgcache[nexacro._getImageLocation("theme://images/ico_search.png")] = { width:36, height:35 };
		imgcache[nexacro._getImageLocation("theme://images/ico_share.png")] = { width:54, height:49 };
		imgcache[nexacro._getImageLocation("theme://images/img_faqTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_login.jpg")] = { width:1200, height:265 };
		imgcache[nexacro._getImageLocation("theme://images/img_mainCon.png")] = { width:1245, height:306 };
		imgcache[nexacro._getImageLocation("theme://images/img_mainConMo.png")] = { width:312, height:315 };
		imgcache[nexacro._getImageLocation("theme://images/img_mainTop.jpg")] = { width:1920, height:683 };
		imgcache[nexacro._getImageLocation("theme://images/img_mainTopMo.jpg")] = { width:640, height:683 };
		imgcache[nexacro._getImageLocation("theme://images/img_newsTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_noticeTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_pollTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_qnaTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_referTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_researchTop.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_researchTop02.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_researchTop03.jpg")] = { width:1200, height:260 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuimage.png")] = { width:210, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuitem2.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Nexacro.png")] = { width:108, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/logo_footer.png")] = { width:202, height:44 };
		imgcache[nexacro._getImageLocation("theme://images/logo_top.png")] = { width:202, height:44 };
		imgcache[nexacro._getImageLocation("theme://images/logo_topMo.png")] = { width:121, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/reser_bul01.png")] = { width:25, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/reser_bul02.png")] = { width:25, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/reser_bul03.png")] = { width:25, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/reser_table01.png")] = { width:1200, height:322 };
		imgcache[nexacro._getImageLocation("theme://images/reser_table02.png")] = { width:1200, height:322 };
		imgcache[nexacro._getImageLocation("theme://images/reser_table03.png")] = { width:1200, height:322 };
		imgcache[nexacro._getImageLocation("theme://images/reser_visual01.jpg")] = { width:1200, height:222 };
		imgcache[nexacro._getImageLocation("theme://images/reser_visual02.jpg")] = { width:1200, height:222 };
		imgcache[nexacro._getImageLocation("theme://images/reser_visual03.jpg")] = { width:1200, height:222 };
	};
}
)();
