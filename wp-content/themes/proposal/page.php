<?php
get_header();

if ( have_posts() ) {

    the_post();

    get_template_part( 'tmpl/top-menu' );

    $template_layout = panthor_get_template_layout();

    get_template_part( 'tmpl/layout', $template_layout );
}
if ( ! post_password_required() ) {

  $children = get_pages( array(
      'sort_column'  => 'menu_order',
      'sort_order'   => 'ASC',
      'hierarchical' => 0,
      'parent'       => get_the_ID(),
      'post_type'    => 'page',
  ) );

  // start child loop
  foreach ( $children as $post ) {

      setup_postdata( $post );

      $template_layout = panthor_get_template_layout();

      get_template_part( 'tmpl/layout', $template_layout );
  }
}

get_footer();
