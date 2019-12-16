<?php $thisPage="shop"; ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->  
    <!--[if IE 7 ]> <html class="ie7"> <![endif]-->  
    <!--[if IE 8 ]> <html class="ie8"> <![endif]-->
    <!--[if lt IE 9]><script src="html5shiv/dist/html5shiv.js"></script><![endif]-->
    <!--[if IE 9 ]> <html class="ie9"> <![endif]--> 
    <!--[if !IE]><!--> <html> <!--<![endif]-->
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Company Name<?php if ($thisPage!="")
echo " | $thisPage"; ?></title>
	<?php include('css/style-file-list.php'); ?>
</head>
<body>

	<div class="pageShell"> <!-- open pageShell -->
	
		<div class="header-outer">
			<?php include('includes/header.php'); ?>
		</div>
		
		<div class="main-outer"> <!-- open main-outer -->
			
			<div class="main-inner"> <!-- open main-inner -->

				<?php include('includes/' . $thisPage . 'MainContent.php'); ?>
			</div> 
            
		  <br class="clear-fix">
		  <!-- close main-outer -->
		</div> 
        <!-- open footer-outer -->	
		<div id="footer-outer" class="footer-outer"> 

			<?php include('includes/footer.php'); ?>
		</div> <!-- close footer-outer -->
        
	</div> <!-- close pageShell -->

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>
</body>

</html>