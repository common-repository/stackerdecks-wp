<?php
/*
	Plugin Name: Stackerdecks WP
	Plugin URI: http://stackerdecks.com/plugins/wordpress/stackerdecks_wp.php
	Description: Directly insert your Stackerdecks in Wordpress via a TinyMCE plugin that injects a shortcode into the post/page content area.
	Version:  1.6
	Author: Stackermedia
	Copyright 2015 Organized Lightning LLC
*/


// CACHE BUSTER ==== CHANGE WITH EACH RELEASE
function version_number($version) {
	$version = '1.6';
	return $version;
}

// add required files to header
wp_enqueue_script( 'stackerdecksembedscript', 'http://stackerdecks.com/js/embedit.js', '', '1.0');

// Add the stylesheets to the admin
function load_stackerdecks_wp_styles() {
    wp_register_style( 'stackerdecks_wp_style', plugins_url( 'stackerdecks_wp_style.css?SD_WP_version='.version_number($version), __FILE__ ), false, '1.0.0' );
        wp_enqueue_style( 'stackerdecks_wp_style' );
        
     wp_register_style( 'google_font_style','http://fonts.googleapis.com/css?family=Open+Sans:800,700,600,400,300', false, '1.0.0' );
        wp_enqueue_style( 'google_font_style' );
}
add_action( 'admin_enqueue_scripts', 'load_stackerdecks_wp_styles' );

//adding the menu options
include ('stackerdecks_wp-options.php');

//adding the stackerdecks shortcode
function stackerdecks_id( $atts, $content = null ) {
	return '<div id="'.$content.'" class="stackit"></div>';
}
add_shortcode("stackerdecks_id", "stackerdecks_id");


//adding the stackerdecks TinyMCE
function register_button( $buttons ) {
	array_push( $buttons, "|", "stackerdecks_wp" );
	return $buttons;
}

function add_plugin( $plugin_array ) {
	$plugin_array['stackerdecks_wp'] = plugins_url( 'js/stackerdecks_wp_tinyMCE.js', __FILE__ );
	return $plugin_array;
}

function stackerdecks_wp_button() {

	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
		return;
	}

	if ( get_user_option('rich_editing') == 'true' ) {
		add_filter( 'mce_external_plugins', 'add_plugin' );
		add_filter( 'mce_buttons', 'register_button' );
	}

}
add_action('init', 'stackerdecks_wp_button');
?>