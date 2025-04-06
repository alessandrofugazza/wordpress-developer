<?php
// TODO https://semver.org
/**
 * The Endless March
 * @link 			https://alessandrofugazza.com/misc/the-endless-march/
 * @since			0.1.0
 * @package 		The_Endless_March
 * @version 		0.1.2
 *
 * @wordpress-plugin
 * Plugin Name: 	The Endless March
 * Plugin URI: 		https://alessandrofugazza.com/misc/the-endless-march/
 * Description: 	Harbingers of the new dawn.
 * Version: 		0.1.2
 * Author: 			Alessandro Fugazza
 * Author URI: 		https://alessandrofugazza.com/
 * Update URI: 		https://alessandrofugazza.com/misc/the-endless-march/
 */

if (!defined('ABSPATH')) {
	exit;
}

// if (is_admin()) {
// 	require_once __DIR__ . '/admin/the-endless-march.php';
// } else {
// 	require_once __DIR__ . '/public/the-endless-march.php';
// }

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

define('THE_ENDLESS_MARCH_VERSION', '0.1.2');

function activate_the_endless_march()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-the-endless-march-activator.php';
	The_Endless_March_Activator::activate();
}

function deactivate_the_endless_march()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-the-endless-march-deactivator.php';
	The_Endless_March_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_the_endless_march');
register_deactivation_hook(__FILE__, 'deactivate_the_endless_march'); // didnt i do this already?


function the_endless_march_get_lyric()
{
	/** These are the lyrics to Hello endless_march */
	$lyrics = "HEART, STEEL
WE KILL
IRON WILL
ON TO WAR!
CYBERSTAN
CAN'T KEEP HER DOWN
WE COUNT DOWN
THE NEW DAWN!
CYBERSTAN
CAN'T KEEP HER DOWN
WE COUNT DOWN
FIGHT TO DAWN!";

	// Here we split it into lines.
	$lyrics = explode("\n", $lyrics);

	// And then randomly choose a line.
	return wptexturize($lyrics[mt_rand(0, count($lyrics) - 1)]);
}

function the_endless_march()
{
	$chosen = the_endless_march_get_lyric();

	printf(
		'<p id="endless-march"><span dir="ltr">%s</span></p>',
		$chosen
	);
}

add_action('admin_notices', 'the_endless_march');

function the_endless_march_enqueue_styles()
{
	wp_enqueue_style(
		'admin-style',
		plugins_url('admin/css/admin-style.css', __FILE__),
		array(),
		'0.1.1'
	);
}

add_action('admin_enqueue_scripts', 'the_endless_march_enqueue_styles');

function the_endless_march_enqueue_public_styles()
{
	// wp_enqueue_style(
	// 	'js-for-web-design',
	// 	plugins_url('public/js-for-web-design/js-for-web-design.css', __FILE__),
	// 	array(),
	// 	'0.1.2'
	// );
}

add_action('wp_enqueue_scripts', 'the_endless_march_enqueue_public_styles');


function the_endless_march_enqueue_admin_scripts()
{
	wp_enqueue_script(
		'admin-script',
		plugins_url('admin/js/admin-script.js', __FILE__),
		array(),
		'0.1.1',
		true
	);
}

add_action('admin_enqueue_scripts', 'the_endless_march_enqueue_admin_scripts');

function the_endless_march_enqueue_public_scripts()
{
	wp_enqueue_script(
		'public-script',
		plugins_url('public/js/public-script.js', __FILE__),
		array(),
		'0.1.2',
		true
	);
	wp_enqueue_script(
		'random-task',
		plugins_url('public/js/random-task.js', __FILE__),
		array(),
		'0.1.2',
		true
	);
	// wp_enqueue_script(
	// 	'js-for-web-design',
	// 	plugins_url('public/js/js-for-web-design/elements.js', __FILE__),
	// 	array(),
	// 	'0.1.2',
	// 	true
	// );
	// wp_enqueue_script(
	// 	'js-for-web-design',
	// 	plugins_url('public/js-for-web-design/js-for-web-design.js', __FILE__),
	// 	array(),
	// 	'0.1.2',
	// 	true
	// );

	// add_filter('script_loader_tag', 'the_endless_march_add_defer_attribute', 10, 2);

	// wp_enqueue_script(
	// 	'lame-editor',
	// 	plugins_url('public/lame-editor/lame-editor.js', __FILE__),
	// 	array(),
	// 	'0.1.2',
	// 	true
	// );

	// add_filter('script_loader_tag', 'the_endless_march_add_defer_attribute', 10, 2);

	wp_enqueue_script(
		'wpforms-lame-editor',
		plugins_url('public/wpforms-lame-editor/wpforms-lame-editor.js', __FILE__),
		array('handlebars'),
		'0.1.2',
		true
	);

	add_filter('script_loader_tag', 'the_endless_march_add_defer_attribute', 10, 2);
}

function the_endless_march_add_defer_attribute($tag, $handle)
{
	if ('js-for-web-design' === $handle || 'lame-editor' === $handle || 'wpforms-lame-editor' === $handle) {
		return str_replace(' src', ' defer src', $tag);
	}
	return $tag;
}

add_action('wp_enqueue_scripts', 'the_endless_march_enqueue_public_scripts');

function enqueue_handlebars_script()
{
	wp_enqueue_script('handlebars', 'https://cdn.jsdelivr.net/npm/handlebars@4.7.8/dist/handlebars.min.js', array(), '4.7.8', true);
}
add_action('wp_enqueue_scripts', 'enqueue_handlebars_script');
