<?php
  //IMathAS:  Main config file.  Edit this file!
  //(c) 2006 David Lippman
//IMathAS Math Config File.  Adjust settings here!

// GROUP: DEVELOPMENT -Comment out for production
// $CFG['assess2-use-vue-dev'] = true;
// $CFG['assess2-use-vue-dev-address'] = 'http://localhost:8080';

//GROUP: DATABASE ACCESS SETTINGS
$dbserver = "localhost";  		//database server
$dbname = "IMathAS";			//database name
$dbusername = "IMathAS";		//database user
$dbpassword = "mzpS8u7Cbvrdj26L";	//database user's password

//GROUP ERROR REPORTING
//error reporting level.  Set to 0 for production servers.
// ID: In Produktivserver nicht gesetzt, hier in init.php auf 0 gesetzt
// error_reporting(E_ALL & ~E_NOTICE);

//GROUP: PATH SETTINGS
//web path to install
//web root to imathas:  http://yoursite.com $imasroot
//set = "" if installed in web root dir
$imasroot = "/IMathAS";

//base site url - use when generating full URLs to site pages.
$httpmode = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on')
|| (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO']=='https')
	? 'https://' : 'http://';
	$GLOBALS['basesiteurl'] = $httpmode . Sanitize::domainNameWithPort($_SERVER['HTTP_HOST']) . $imasroot;

//absolute path or full url to Mimetex CGI, for math image fallback
//if you do not have a local install, feel free to use:
// $mathimgurl = "http://www.imathas.com/cgi-bin/mimetex.cgi";
$mathimgurl = "/cgi-bin/mimetex.cgi";

//This is used to change the session file path different than the default.
  //This is usually not necessary unless your site is on a server farm, or
  //you're on a shared server and want more security of session data.
  //This may also be needed to allow setting the garbage collection time limit
  //so that session data isn't removed after 24 minutes.
  //Make sure this directory has write access by the server process.
  //$sessionpath = '/tmp/persistent/imathas/sessions';

  //math live chat server - comment out to not use
  //Chat uses its own database tables, and draws user info from the
  //query string rather than from the IMathAS user tables, so you
  //can use the chat server on a different IMathAS install
  //to reduce the server load on the main install.
  //use this URL to use the local server:
  $mathchaturl = "$imasroot/mathchat/index.php";

$CFG['GEN']['livepollserver'] ="netmath.vcrp.de";
$CFG['GEN']['livepollpassword'] = "y99v7aDPOIU";


// GROUP: USER RIGHTS

// Anmelden als Gast guest ohne Passwort ermöglichen (guestaccount) !!! ID !!!
//if you want to allow people to create guest accounts by just logging in with username "guest",
  //provide an arrary of course ids to automatically enroll them in
//$CFG['GEN']['guesttempaccts'] = array(264);

//should non-admins be allowed to create new non-group libraries?
//on a single-school install, set to true; for larger installs that plan to
//use the instructor-groups features, set to false
$allownongrouplibs = true;

//should anyone be allowed to import/export questions and libraries from the
//course page?  Intended for easy sharing between systems, but the course page
//is cleaner if turned off.
$allowcourseimport = false;

//allow installation of macro files by admins?  macro files contain a large
//security risk.  If you are going to have many admins, and don't trust the
//security of their passwords, you should set this to false.  Installing
//macros is equivalent in security risk to having FTP access to the IMathAS
//server.
//For single-admin systems, it is recommended you leave this as false, and
//change it when you need to install a macro file.  Do install macro files
//using the web system; a help file is automatically generated when you install
//through the system
$allowmacroinstall = true;

//template user id
//Generally not needed.  Use if you want a list of Template courses in the
//copy course items page.  Set = to a user's ID who will serve as the
//template holder instructor.  Add that user to all courses to list as a
//template
//$templateuser = 10;

// GROUP: ORGANIZATION SPECIFIC SETTINGS

$CFG['locale'] = "de_DE.UTF-8";
//$CFG['locale'] = "de";

//The name for this installation.  For personalization
$installname = "IMathAS";

//the email address to have as the "from" listing on confirmation emails
//also the address new instructor requests (if you use that page) will be
//sent to
$sendfrom = "dahn@vcrp.de";

// GROUP: LTI

//enables use of IMathAS as a BasicLTI producer.
$enablebasiclti = true;
$CFG['LTI']['showURLinSettings'] = true;

// GROUP: GENERAL LOOK
//A small logo to display on the upper right of course pages
//set = '<img src="/path/to/img.gif">' or = 'Some Text'
//Image should be about 120 x 80px
$smallheaderlogo = "";

// Themes-Liste !!! ID !!!
$CFG['CPS']['themelist'] = "default_nm.css,default.css,angelish.css,angelishmore.css,facebookish.css,highcontrast.css,highcontrast_dark.css,modern.css,netmath.css,oea.css,wamap.css";
$CFG['CPS']['themenames'] = "Standard (neu),Standard (alt),Engelhaft,Engelhafter,Facebook-Art,Hoher Kontrast,Hoher Kontrast (dunkel),Modern,NetMath,OEA,Wamap";

// GROUP: LOGIN AND HOME PAGE
//To change loginpage based on domain/url/etc, define $loginpage here

$defaultcoursetheme = "wamap.css";
// Default theme for new courses !!! ID !!!
$CFG['CPS']['theme'] = array("default_nm.css",1);

//short prompt, for login page
$loginprompt = "Username";

$studentTOS="info/studentTOS.php";
// Kopf der Home-Seite
$CFG['GEN']['headerinclude'] = "headercontentvcrp.php";
$CFG['GEN']['hidedefindexmenu'] = true;

// GROUP: USER REGISTRATION
//For new user, long description of username requirement
$longloginprompt = "Geben Sie einen Benutzernamen ein. Verwenden Sie nur Buchstaben, Zahlen und das Zeichen _.";

//Require the username to meet a specific format.  Choose one of the following,
//or write your own.
$loginformat = '/^(\w+|lti-\d+)$/';  //A-Z, a-z, 0-9, _ are the only allowed characters
//$loginformat = '/^\d{9}$/';  //Requires a 9 digit number
//$loginformat = '/^\d{3}-\d{2}-\d{4}$/';  //SSN type format: 555-55-5555

//uses more secure password hashes!
$CFG['GEN']['newpasswords'] = 'only';

$CFG['acct']['SIDformaterror'] = "Ungültiges Format für einen Benutzernamen.";
$CFG['acct']['passwordFormaterror'] = "Ungültiges Passwortformat";
$CFG['acct']['emailFormaterror'] = "Ungültige eMail-Adresse";

//If set to true, the system will send an email to newusers when they try
//to enroll.  They have to respond to the email before they are allowed to
//log in.
$emailconfirmation = false;

// Automatisches Einschreiben in Dozenten-Cafe und Spielwiese !!! ID !!! - Einkommentieren für Produktivversion
//$CFG['GEN']['enrollonnewinstructor'] = array(15,87);

// GROUP: TESTS

//color shift icons as deadline approaches?
$colorshift = true;

// -----------------------

  //For text editor file/image uploads and assessment file uploads, we can use
  //Amazon S3 service to hold these files.  If using this option, provide your
  //Amazon S3 key and secret below.  You'll also need to create a bucket and
  //specify it below.
  //If this is not provided, local storage will be used.
  //$AWSkey = "";
  //$AWSsecret = "";
  //$AWSbucket = "";


  //Special Config tags for customizing
  //$loginpage = 'custom-login-page.php';
  /*
  $studentTOS = "info/studentTOS.php";
  $CFG['CPS']['theme'] = array("modern.css",1);  //default theme - second value 0=fixed, 1=can change
  $CFG['CPS']['themelist'] = "default.css,modern.css";  //list of allowed themes
  $CFG['CPS']['themenames'] = "Default, Modern";  //to give names to the theme files

  $CFG['GEN']['allowinstraddstus'] = false; //disallow instructors to add students from the roster page
  $CFG['GEN']['allowInstrImportStuByName'] = false;  //disallow instructors from using first_last username on import
  $CFG['GEN']['allowinstraddtutors'] = false;  //disallow instructors to enroll tutors
  $CFG['GEN']['addteachersrights'] = 75;  //min rights to add/remove teachers to a course
  $CFG['GEN']['homelayout'] = '|0,1,2|10,11|';  //default home layout
  $CFG['GEN']['fixedhomelayout'] = array(3);  //prevent changing of home layout sections
  $CFG['GEN']['hometitle'] = "Home";	//title for course list page
  $CFG['GEN']['headerinclude'] = "headercontent.php";  //page to include in all headers

  //$CFG['GEN']['noFileBrowser'] = true;  //disallow file uploads through the tinyMCE editor.

  //if you want to allow people to create guest accounts by just logging in with username "guest",
  //provide an arrary of course ids to automatically enroll them in
//  $CFG['GEN']['guesttempaccts'] = array(264);

   //userid for instructor of student self-enroll courses (that show up in enroll list)
   $CFG['GEN']['selfenrolluser'] = 92434;

  //can set almost any assessment setting this way
	 $CFG['AMS']['defpoints'] = 1;  //default points
	 $CFG['AMS']['showtips'] = 2;   //entry answer format

	 $CFG['AMS']['guesslib'] = true;  //guess library based on where most questions are from

	 //and most of the gradebook settings
	 $CFG['GBS']['defgbmode'] = 1011;    //default gradebook mode
	 $CFG['GBS']['orderby'] = 1;         //default gradebook ordering
	 $CFG['GBS']['lockheader'] = true;   //lock headers?

	 //and course settings.  All but themelist are in the form
	 //array(defvalue, allowchange)
	 $CFG['CPS']['hideicons'] = array(0,0);
	 $CFG['CPS']['cploc'] = array(7,0);
	 $CFG['CPS']['picicons'] =  array(1,0);
	 $CFG['CPS']['unenroll'] = array(0,0);
	 $CFG['CPS']['chatset'] = array(0,0);
	 $CFG['CPS']['showlatepass'] = array(1,0);
	 $CFG['CPS']['topbar'] = array(array("0,1,2,3,9","0,2,3,4,6,7,9",1),0);

	 $CFG['CPS']['additemtype'] = array('links',0);   //instead of pull-down
	 $CFG['CPS']['leftnavtools'] = false;      //hide roster, etc from left nav
	 $CFG['CPS']['templateoncreate'] = true;  //ask to template course on creation?

	 $CFG['CPS']['itemicons'] = array(
		 'folder'=>'folder_icon.png',
		 'assess'=>'assess_icon.png',
		 'forum'=>'forum_icon.png',
		 'inline'=>'text_icon.png',
		 'web'=>'link_icon.png',
		 'doc'=>'link_icon.png',
		 'html'=>'link_icon.png');   //custom icons

	 $CFG['CPS']['miniicons'] = array(
		 'inline'=>'text_mini.png',
		 'linked'=>'link_mini.png',
		 'assess'=>'assess_mini.png',
		 'forum'=>'forum_mini.png',
		 'folder'=>'folder_mini.png',
		 'calendar'=>'cal_mini.png');   //custom mini icons, for links display

	//custom icons for test display, in place of half-full box, etc
	 $CFG['TE']['navicons'] = array(
	 	 'untried'=>'te_blue_arrow.png',
	 	 'canretrywrong'=>'te_red_redo.png',
	 	 'canretrypartial'=>'te_yellow_redo.png',
	 	 'noretry'=>'te_blank.gif',
	 	 'correct'=>'te_green_check.png',
	 	 'wrong'=>'te_red_ex.png',
	 	 'partial'=>'te_yellow_check.png');
	 */








  //no need to change anything from here on
  /* Connecting, selecting database */
  // MySQL with PDO_MYSQL
  try {
    $DBH = new PDO("mysql:host=$dbserver;dbname=$dbname", $dbusername, $dbpassword);
    $DBH->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT );
    $GLOBALS["DBH"] = $DBH;
  } catch(PDOException $e) {
    die("Could not connect to database: " . $e->getMessage());
  }
  $DBH->query("set session sql_mode=''");

  unset($dbserver);
  unset($dbusername);
  unset($dbpassword);
?>

