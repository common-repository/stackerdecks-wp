<?php

function stackerdecks_wp_admin_menu()
{
	// Add Stacker Menu Options Menu to WP admin
	add_menu_page("Stackerdecks WP", "Stackerdecks WP", 'publish_posts', 'stackerdecks_wp_page', 'stackerdecks_wp_settings_page', plugins_url('img/stackerdecks_icon.png',__FILE__),91);
}

function stackerdecks_wp_settings_page() {

?>
<!--twitter and facebook scripts-->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

<!-- Load Facebook SDK for JavaScript -->
	<div id="fb-root"></div><script src="//connect.facebook.net/en_US/sdk.js"></script>
	<script>
//Facebook Init............................................

        FB.init({
          appId: '252923474901970',
          cookie: true,
          xfbml: true,
          version: 'v2.3',
          status: true

        });
</script>



	<div class="SD_WP-wrap">

           <div id="two_column">
	        <img class="SD_WP-header_logo" src="<? echo plugins_url( 'img/stackerdecks_wp-banner.jpg?SD_WP_version='.version_number($version), __FILE__ );?>">

	        <h2 class="SD_WP-header_title">Stackerdecks WP inserts any Stackerdecks slideshow or listicle in your Wordpress post with a single click.</h2>
            <?

	//link....
	$clink = "https://chrome.google.com/webstore/detail/stackerdecks/ecfljkneabepkbbghoabjmbpeacneppf";
	$slink = "http://extensions.apple.com/details/?id=com.stackermedia.stackerdecks-KVUQBCH8S8";

	//message
	//echo file_get_contents("email/header.html");

?>

            <hr class="deck_wall_hr">
            <div class="action_box_left">
							<h3 class="p_header">What are Stackerdecks?</h3>

							Stackerdecks are distributable slideshows and listicles that directly support the use of Tweets, posts from Facebook, Tumblr, Instagram, and Pinterest, Vines, YouTube, Soundcloud and Spotify songs, memes, animated GIFs, blog posts, product pages, and images (attribution included) from most sites with much more to come.
<div class="spacer"></div>
If the content is publicly viewable, it can be added to Stackerdecks.
<div class="spacer"></div>



							<div class="spacer"></div>


<div style='clear: both; margin-bottom: 20px;'></div>


					<div class="stack_header">
						<h3 class="SD_WP-header_title">Getting Started</h3>

						<hr class="deck_wall_hr">
					</div>
					<h3 class="p_header">To access a Stackerdeck or build you own: </h3>

					<div class="spacer"></div>
					
					1. Sign up for your account, at <a href="http://stackerdecks.com" target="_blank">Stackerdecks.com</a>. 
					<div style="clear: both;"></div>
					2. Choose any of the Stackerdecks already built and add them to your Timeline, or grab the Stack It button, our desktop extension for Google Chrome for Windows and Mac and Apple Safari for Mac, and build your own. 

<div class="spacer"></div>

						<a class="extension_cta_button" style='margin-right: 20px; ' href='<?=$clink ?>' target='_blank'><img src='<? echo plugins_url( 'img/chrome-extension-download-cta.png?SD_WP_version='.version_number($version), __FILE__ );?>' alt='Chrome Extension' width='200px'></a>

						<a class="extension_cta_button" href='<?=$slink ?>' target='_blank'><img src='<? echo plugins_url( 'img/safari-extension-download-cta.png?SD_WP_version='.version_number($version), __FILE__ );?>' alt='Safari Extension' width='200px'></a>
						
						<div class="spacer"></div>
						If you’re on any other browser, drag this bookmarklet to your browser’s toolbar.
						<div style="clear: both;"></div>

							<a 
		onclick="SD_change_input_type(); return false;" 		
		href="javascript:if(typeof stacking_page=='undefined'){var stacking_page=1;(function(){if(window.location.protocol=='http:'||window.location.protocol=='https:'){window.stop();var sd_verions='2';var button_type='bookmark';var sd_script=document.createElement('script');sd_script.id='sd_stackit';sd_script.onerror=function(e){function removeAllText()
{var tmp_body=document.createElement('div');tmp_body.innerHTML=document.body.innerHTML;var elements=tmp_body.getElementsByTagName('*');for(var i=0;i<elements.length;i++){if(elements[i].children.length===0){elements[i].textContent='';}}return tmp_body};var stackit_body=removeAllText();var regex1=new RegExp('noscript','g');var regex2=new RegExp('script','g');var regex3=new RegExp('iframe','g');var stackit_html=btoa(unescape(encodeURIComponent('<!DOCTYPE html><html><head>'+document.getElementsByTagName('head')[0].innerHTML+'<head><body><div id=\'sd_feedback\'></div><div style=\'display:none;\'>'+stackit_body.innerHTML+'</div></body></html><script>window.stop();var sd_verions=\'2\';var button_type=\'bookmark\';var sourceurl=\''+location.href+'\';var sd_host=\''+window.location.host+'\';var sd_script=document.createElement(\'script\');sd_script.id=\'sd_stackit\';sd_script.onerror=function(e){alert(\'Failed to stack '+window.location.host+'. Try stacking this page in another browser or download the chrome or safari extension.\');document.location.replace(sourceurl);};sd_script.src=\'https://stackerdecks.com/js/stackit.js\';document.body.appendChild(sd_script);</script>')));window.open('data:text/html;base64,'+stackit_html.replace(regex1,'script').replace(regex2,'noscript').replace(regex3,'noframe').replace(/\s+/g,' ').trim(),'_parent');};sd_script.src='//stackerdecks.com/js/stackit.js';document.body.appendChild(sd_script);}})()};"
		title="Stackit Button" 
		style='float: left; margin-top: 10px;'
		class="extension_cta_button" 
		data-clipboard-action="copy" 
		data-clipboard-target="#sd_bookmarklet_value"
		id="SD_bookmark_button">
			<img src='<? echo plugins_url( 'img/bookmarklet-cta.png?SD_WP_version='.version_number($version), __FILE__ );?> alt='💥 Stackit' width='200px'>
			</a>
		<span style='float: left; margin: 10px;display:inline-block;text-align: left;/* max-width: 100%; */width: 65%;'><b>Can't drag to browser’s toolbar?</b><br> Click on the bookmarklet image to copy link, open your bookmarks manager, edit an existing bookmark, change name to Stackit, and paste the copied link as the url.</span>
		<div id="SD_bookmark_feeback" style="float: left; color: red;"></div>
		
		
	<div id="sd_bookmarklet_value_show" style="display: none;">	
	<textarea id="sd_bookmarklet_value" style="width: 100%;
    height: 200px;" readonly></textarea>
	</div>

<script src="//stackerdecks.com/plugins/clipboard/clipboard.min.js"></script>
<script>

var clipboard = new Clipboard('#SD_bookmark_button');

function SD_change_input_type()
{

	var SD_bookmark_href = document.getElementById("SD_bookmark_button").getAttribute("href");
	document.getElementById("sd_bookmarklet_value").innerHTML = SD_bookmark_href;

	document.getElementById('sd_bookmarklet_value_show').style.display = "block";

	clipboard.on('success', function(e)
	{
		console.log(e);
		document.getElementById('sd_bookmarklet_value_show').style.display = "none";
		SD_bookmark_feeback.textContent = "Bookmark Link Copied!";

		setTimeout(function()
		{
			SD_bookmark_feeback.textContent = "";
		}, 2000);

	});

	clipboard.on('error', function(e)
	{
		console.log(e);

		SD_bookmark_feeback.textContent = "Copy Bookmarklet link below:";

	});

}
</script>



<div class="spacer"></div>
<div style='clear: both; margin-bottom: 20px;'></div>

<h3 class="p_header">Stackerdecks accounts are available in free and paid tiers.</h3>
<div class="spacer"></div>
Stackerdecks Native Embedded (free) is our ad-supported solution for publishing Stackerdecks on your site. The native state of Stackerdecks Embedded includes our logo, a single display advertisement, and a content discovery block.
<div class="spacer"></div>
Stackerdecks Enterprise Embedded is a powerful option for brands and ad-supported publishers to both customize and monetize their Stackerdecks. With our Enterprise Embedded subscription, each press of next on your published Stackerdecks measure as a page viewed and can also optionally refresh any advertising unit on a page, resulting in exponential improvement in revenue as well as deeper, actionable insights into audience engagement.
<div class="spacer"></div>
For more information on our Enterprise Embedded subscription, please contact us at <a href="mailto:sales@stackerdecks.com?Subject=Sales%20inquery%20regarding%20Stackerdecks" target="_top">sales@stackerdecks.com</a>.

<div class="spacer"></div>

					</div>




            <div style='clear: both; margin-bottom: 20px;'></div>

            <div class="stack_header">
				<h3 class="SD_WP-header_title">Examples</h3>

				<hr class="deck_wall_hr">
			</div>


		<!-- Left Column -->
		<div id="left_column" class="left_column key_page">
			 <div id="NTZzMTQ3MA==" class="stackit"></div><script type="text/javascript" src="//stackerdecks.com/js/embedit.js" async></script>
					</div>


			<!-- Right Column -->
		<div id="right_column" class="right_column key_page">


          <div id="MTBzMTkyNg==" class="stackit"></div><script type="text/javascript" src="//stackerdecks.com/js/embedit.js" async></script>
         </div>
         
         
         
         
         
         
         <div style='clear: both; margin-bottom: 20px;'></div>
  <div class="spacer"></div>
 <div class="stack_header">
				<h3 class="SD_WP-header_title">Follow/Like Us</h3>
				<hr class="deck_wall_hr">
			</div>
				Also, if you’d be so kind as to <b>Follow Us on Twitter and/or Like Us on Facebook,</b> we’d REALLY appreciate that. (and, we will very likely follow you back)

				<div style='clear: both; margin-bottom: 10px;'></div>

				<div class="SD_social_item">
					<div class="fb-like" data-href="https://www.facebook.com/stackerd" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div>
				</div>
				
				<div class="SD_social_item">
  
					<a class="twitter-follow-button" href="https://twitter.com/stackerdecks" data-show-count="false" data-show-screen-name="false"></a>

			</div>




<div style='clear: both; margin-bottom: 20px;'></div>
  <div class="spacer"></div>
 <div class="stack_header">
				<h3 class="SD_WP-header_title">Support</h3>

				<hr class="deck_wall_hr">
			</div>
			If you have more questions about Stackerdecks we would be happy to answer them.
Please feel free to contact us at <a href="mailto:support.stackerdeckswp@stackerdecks.com?Subject=Support%20question%20regarding%20Stackerdecks%20WP" target="_top">Support.StackerdecksWP@stackerdecks.com</a>.


	</div>
	<?php
}

function stackerdecks_wp_options_update()
{
	// this is where validation would go
	//update_option('stacker_menu_color',  $_POST['color']);
}

add_action('admin_menu', 'stackerdecks_wp_admin_menu');

?>
