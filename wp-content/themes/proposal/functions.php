<?php
if ( !function_exists( 'child_theme_enqueue_scripts' ) ) {

  function child_theme_enqueue_scripts() {
    $child_template_dir = get_stylesheet_directory_uri();
    wp_enqueue_script( 'child', $child_template_dir . '/js/child.js', false, false, true );
  }

  add_action( 'wp_enqueue_scripts', 'child_theme_enqueue_scripts' );
}
?>
