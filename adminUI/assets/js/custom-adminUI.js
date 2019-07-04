 
$( document ).ready(function() {
	$( "#adminUI" ).adminUImenu({
		themelayout: 'vertical',				// vertical/horizontal
		verticalMenuplacement: 'left',			// left/right
		verticalMenulayout: 'wide',   			// wide/box/widebox
		MenuTrigger: 'click',					// click/hover
		SubMenuTrigger: 'click',				// click/hover
		activeMenuClass: 'active',          	// 
		ThemeBackgroundPattern: 'pattern6', 	// 
		HeaderBackground: 'theme2' ,    		// 
		LHeaderBackground :'theme4',        	// 
		NavbarBackground: 'theme4',				// 
		ActiveItemBackground: 'theme0',			// 
		SubItemBackground: 'theme2',			//
		ActiveItemStyle: 'style0',				// 
		ItemBorder: false,						// true/false
		ItemBorderStyle: 'solid',				// solid,dotted,dashed
		SubItemBorder: true,					// true/false
		DropDownIconStyle: 'style1',			// style1,style2,style3
		FixedNavbarPosition: true,				// true/false
		FixedHeaderPosition: false,				// true/false
		collapseVerticalLeftHeader: true,		// true/false
		VerticalSubMenuItemIconStyle: 'style6',	// style1,style2,style3,style4,style5,style6
		VerticalNavigationView: 'view1',		//
		verticalMenueffect:{
			desktop : "shrink",					// overlay,push,shrink
			tablet : "shrink",					// overlay,push,shrink
			phone : "overlay",					// overlay,push,shrink
		},
		defaultVerticalMenu: {
			desktop : "expanded",				// offcanvas/collapsed/expanded/compact/compact-acc/fullpage/ex-popover/sub-expanded
			tablet : "expanded",				// offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
			phone : "offcanvas",				// offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
		},
		onToggleVerticalMenu : {
			desktop : "collapsed",				// offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
			tablet : "collapsed",				// offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
			phone : "expanded",					// offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
		},

	});
	 
	
	/* Left header Theme Change function Start */
	function handleleftheadertheme() {
		$('.theme-color > a.leftheader-theme').on("click", function() {
			var lheadertheme = $(this).attr("lheader-theme");
			$('.adminUI-header .adminUI-left-header').attr("lheader-theme", lheadertheme);
        });
    };
	
	handleleftheadertheme();
 /* Left header Theme Change function Close */	
 /* header Theme Change function Start */	
	function handleheadertheme() {
		$('.theme-color > a.header-theme').on("click", function() {
			var headertheme = $(this).attr("header-theme");
			$('.adminUI-header').attr("header-theme", headertheme);
        });
    };
	handleheadertheme();
 /* header Theme Change function Close */	
 /* Navbar Theme Change function Start */	
	function handlenavbartheme() {
		$('.theme-color > a.navbar-theme').on("click", function() {
			var navbartheme = $(this).attr("navbar-theme");
			$('.adminUI-navbar').attr("navbar-theme", navbartheme);
        });
    };
	
	handlenavbartheme();
 /* Navbar Theme Change function Close */
 /* Active Item Theme Change function Start */
	function handleactiveitemtheme() {
		$('.theme-color > a.active-item-theme').on("click", function() {
			var activeitemtheme = $(this).attr("active-item-theme");
			$('.adminUI-navbar').attr("active-item-theme", activeitemtheme);
        });
    };
	
	handleactiveitemtheme();
 /* Active Item Theme Change function Close */
 /* SubItem Theme Change function Start */	
	function handlesubitemtheme() {
		$('.theme-color > a.sub-item-theme').on("click", function() {
			var subitemtheme = $(this).attr("sub-item-theme");
			$('.adminUI-navbar').attr("sub-item-theme", subitemtheme);
        });
    };
	
	handlesubitemtheme();
 /* SubItem Theme Change function Close */
 /* Theme background pattren Change function Start */
	function handlethemebgpattern() {
		$('.theme-color > a.themebg-pattern').on("click", function() {
			var themebgpattern = $(this).attr("themebg-pattern");
			$('body').attr("themebg-pattern", themebgpattern);
        });
    };
	
	handlethemebgpattern();
 /* Theme background pattren Change function Close */
 /* Vertical Navigation View Change function start*/
	function handleVerticalNavigationViewChange() {
		$('#navigation-view').val('view1').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI').attr('vnavigation-view', get_value); 
		});
	};

   handleVerticalNavigationViewChange ();
 /* Theme Layout Change function Close*/
 /* Theme Layout Change function start*/
	function handlethemeverticallayout() {
		$('#theme-layout').val('wide').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI').attr('vertical-layout', get_value); 
		});
	};

   handlethemeverticallayout ();
 /* Theme Layout Change function Close*/
 /* Menu effect change function start*/
	function handleverticalMenueffect() {
		$('#vertical-menu-effect').val('shrink').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI').attr('vertical-effect', get_value); 
		});
	};

   handleverticalMenueffect ();
 /* Menu effect change function Close*/ 
 /* Vertical Menu Placement change function start*/ 
   function handleverticalMenuplacement() {
		$('#vertical-navbar-placement').val('left').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI').attr('vertical-placement', get_value);
			$('.adminUI-navbar').attr("adminUI-navbar-position", 'absolute' ); 
			$('.adminUI-header .adminUI-left-header').attr("adminUI-lheader-position", 'relative' );
		});
	};

   handleverticalMenuplacement ();
 /* Vertical Menu Placement change function Close*/  
 /* Vertical Active Item Style change function Start*/  
   function handleverticalActiveItemStyle() {
		$('#vertical-activeitem-style').val('style1').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI-navbar').attr('active-item-style', get_value); 
		});
	};

   handleverticalActiveItemStyle ();
 /* Vertical Active Item Style change function Close*/ 
 /* Vertical Item border change function Start*/   
	function handleVerticalIItemBorder() {
			$('#vertical-item-border').change(function() {
				if( $(this).is(":checked")) {
					$('.adminUI-navbar .adminUI-item').attr('item-border', 'false');
				}else {
					$('.adminUI-navbar .adminUI-item').attr('item-border', 'true');
				}      
			});
		};

   handleVerticalIItemBorder ();
 /* Vertical Item border change function Close*/   
 /* Vertical SubItem border change function Start*/   
   function handleVerticalSubIItemBorder() {
			$('#vertical-subitem-border').change(function() {
				if( $(this).is(":checked")) {
					$('.adminUI-navbar .adminUI-item').attr('subitem-border', 'false');
				}else {
					$('.adminUI-navbar .adminUI-item').attr('subitem-border', 'true');
				}      
			});
		};

   handleVerticalSubIItemBorder ();
 /* Vertical SubItem border change function Close*/  
 /* Vertical Item border Style change function Start*/  
   function handleverticalboderstyle() {
		$('#vertical-border-style').val('solid').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI-navbar .adminUI-item').attr('item-border-style', get_value); 
		});
	};

   handleverticalboderstyle ();
 /* Vertical Item border Style change function Close*/   
 /* Vertical Dropdown Icon change function Start*/ 
      function handleVerticalDropDownIconStyle() {
		$('#vertical-dropdown-icon').val('style1').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI-navbar .adminUI-hasmenu').attr('dropdown-icon', get_value); 
		});
	};

   handleVerticalDropDownIconStyle ();
 /* Vertical Dropdown Icon change function Close*/
 /* Vertical SubItem Icon change function Start*/

    function handleVerticalSubMenuItemIconStyle() {
		$('#vertical-subitem-icon').val('style5').on('change', function (get_value) {
			get_value = $(this).val();
			$('.adminUI-navbar .adminUI-hasmenu').attr('subitem-icon', get_value); 
		});
	};

   handleVerticalSubMenuItemIconStyle ();
 /* Vertical SubItem Icon change function Close*/
 /* Vertical Navbar Position change function Start*/ 
	function handlesidebarposition() {
			$('#sidebar-position').change(function() {
				if( $(this).is(":checked")) {
					$('.adminUI-navbar').attr("adminUI-navbar-position", 'fixed' );
					$('.adminUI-header .adminUI-left-header').attr("adminUI-lheader-position", 'fixed' );
				}else {
					$('.adminUI-navbar').attr("adminUI-navbar-position", 'absolute' ); 
					$('.adminUI-header .adminUI-left-header').attr("adminUI-lheader-position", 'relative' );
				}      
			});
		};

   handlesidebarposition ();
 /* Vertical Navbar Position change function Close*/   
 /* Vertical Header Position change function Start*/ 
   	function handleheaderposition() {
			$('#header-position').change(function() {
				if( $(this).is(":checked")) {
					$('.adminUI-header').attr("adminUI-header-position", 'fixed' );
					$('.adminUI-main-container').css('margin-top', $(".adminUI-header").outerHeight());
				}else {
					$('.adminUI-header').attr("adminUI-header-position", 'relative' );
					$('.adminUI-main-container').css('margin-top', '0px');
				}      
			});
		};

   handleheaderposition ();
 /* Vertical Header Position change function Close*/ 


/*  collapseable Left Header Change Function Start here*/
   	function handlecollapseLeftHeader() {
			$('#collapse-left-header').change(function() {
				if( $(this).is(":checked")) {
					$('.adminUI-header, .adminUI ').removeClass('iscollapsed');
					$('.adminUI-header, .adminUI').addClass('nocollapsed');
				}else { 
					$('.adminUI-header, .adminUI').addClass('iscollapsed');
					$('.adminUI-header, .adminUI').removeClass('nocollapsed');					
				}      
			});
		};

   handlecollapseLeftHeader ();


/*  collapseable Left Header Change Function Close here*/
 
  
});