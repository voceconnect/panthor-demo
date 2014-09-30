<a name="#home"></a>
<header role="banner" id="spy-nav">
  <ul class="nav">
  <?php
  // This is not a subpage
  $children = get_pages( array(
    'sort_column'  => 'menu_order',
    'sort_order'   => 'ASC',
    'hierarchical' => 0,
    'parent'       => get_the_ID(),
    'post_type'    => 'page',
  ) );
  foreach ( $children as $child ) {
    setup_postdata( $post );
    if ( $page_bookmark = panthor_get_meta( 'panel-options_id', $child->ID ) ) :
    ?>
        <li><a href="#<?php echo esc_attr( $page_bookmark ); ?>"><?php echo esc_html( strip_tags( get_the_title( $child->ID ) ) ); ?></a></li>
    <?php
    endif;
  }
  wp_reset_query();
  ?>
  </ul>
  <h1 class="main-logo">VocePlatforms</h1>
  <div class="clr"></div>
</header>
