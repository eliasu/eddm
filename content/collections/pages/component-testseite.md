---
id: fc7f8d84-b2ed-44c9-a32d-4ab024e422b2
blueprint: component_page
header_media: image
text_bard:
  -
    type: paragraph
    content:
      -
        type: text
        marks:
          -
            type: underline
        text: Gemeinsam
      -
        type: text
        text: ' mit unserer Community entwickeln und organisieren wir viele kleine und große Veranstaltungen im Jahr. Entdecke die kommenden Events und sei dabei. Wir freuen uns auf dich!'
  -
    type: set
    attrs:
      values:
        type: link
        link_name_txt: Link
        link_type_url: Jeahsda
  -
    type: set
    attrs:
      values:
        type: link
        link_name_txt: 'Ein Link Name'
        link_type_link: 'http://www.google.de'
        link_type_url: www.google.de
  -
    type: paragraph
title: 'Component Testseite'
hide_specials_modal: false
template: component_page
updated_by: 440d777d-27d0-48e6-bc51-23842547dc4c
updated_at: 1647387134
components:
  -
    headline_txt: 'Ein neuer Punkt'
    component_template: pano_slider
    images_img:
      - raum1.jpg
      - Platzhalter.png
      - jasper-garratt-LrVxf8QFspw-unsplash.jpg
      - raum2.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Hier kommt ein Text über lustige Sachen. '
      -
        type: set
        attrs:
          values:
            type: button
            link_name_txt: 'Klicke Hier!'
            link_type_url: google.de
      -
        type: paragraph
    type: image_text_component
    enabled: true
  -
    headline_txt: 'Slider Right'
    component_template: slider_right
    images_img:
      - jasper-garratt-LrVxf8QFspw-unsplash.jpg
      - e59b7226d10a271b6ea9ff8fb710cb2a.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Hier ein Text der lang ist. Hier ein Text der lang ist. Hier ein Text der lang ist. Hier ein Text der lang ist. Hier ein Text der lang ist. Hier ein Text der lang ist. Hier ein Text der lang ist. Hier ein Text der lang ist. '
    type: image_text_component
    enabled: true
  -
    headline_txt: 'Slider Left'
    component_template: slider_left
    images_img:
      - Kueche_hero.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'at massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugi'
    type: image_text_component
    enabled: true
  -
    headline_txt: 'Hier ohne Biold einmal'
    component_template: no_image
    background_color: blue
    text_color: white
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nu'
      -
        type: paragraph
      -
        type: set
        attrs:
          values:
            type: link
            link_name_txt: 'Test Link'
            link_type_url: gooigle-de
      -
        type: paragraph
      -
        type: paragraph
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nu'
      -
        type: paragraph
        content:
          -
            type: text
            text: '  '
      -
        type: set
        attrs:
          values:
            type: button
            link_name_txt: 'Noch ein Button'
            link_type_url: google.de
      -
        type: paragraph
    type: image_text_component
    enabled: true
  -
    headline_txt: 'Panorama Image'
    component_template: pano_image
    images_img:
      - susan-wilkinson-95VpQJOr2AE-unsplash.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'at massa quis enim. Donec '
          -
            type: text
            marks:
              -
                type: strike
            text: pede
          -
            type: text
            text: ' justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, '
          -
            type: text
            marks:
              -
                type: underline
            text: imperdiet
          -
            type: text
            text: ' a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugi'
    type: image_text_component
    enabled: true
  -
    headline_txt: Elias
    component_template: pano_image
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Hier ein Text'
    type: image_text_component
    enabled: true
    images_img:
      - Kueche_hero.jpg
      - raum1.jpg
      - raum2.jpg
  -
    columns:
      -
        headline: 'Headline 1'
        images_img: raum1.jpg
        textarea_txt: 'Hier ein kleiner Subtext. Noch was.'
        link_name_txt: 'Schau hier'
        link_type_url: google.de
      -
        headline: 'Headline 2'
        images_img: susan-wilkinson-95VpQJOr2AE-unsplash.jpg
        textarea_txt: 'Hier ein kleiner Subtext. Noch was längeres ist auch dabei!'
        link_name_txt: 'Schau hier'
        link_type_url: google.de
      -
        headline: 'Headline 3'
        images_img: raum2.jpg
        textarea_txt: 'Hier ein kleiner Subtext.'
        link_name_txt: 'Schau hier'
        link_type_url: google.de
    type: 3_columns_component
    enabled: true
  -
    headline_txt: 'Next Events are coming'
    type: next_events_component
    enabled: true
  -
    text_color: blue
    background_color: white
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wat play. Maybe it’s less an issue with the pattern than the implementation of it. That led me to believe that this is the time to write follow-up article to see if we can address some of the problems Chris pointed out.'
      -
        type: set
        attrs:
          values:
            type: link
            link_name_txt: 'LINK hier'
            link_type_url: googl.de
      -
        type: set
        attrs:
          values:
            type: button
            link_name_txt: 'Oder Hier!'
            link_type_url: googl.de
    type: big_text_component
    enabled: true
  -
    grid_field:
      -
        link_link: google.de
        images_img: Platzhalter.png
        underline_txt: 'Wir lieben Grids.'
      -
        link_link: google.de
        images_img: Platzhalter.png
        underline_txt: 'Wir lieben Grids.'
      -
        link_link: google.de
        images_img: Platzhalter.png
        underline_txt: 'Wir lieben Grids.'
    type: broken_grid_component
    enabled: true
images_img: Kueche_hero.jpg
disable_header: false
disable_eye-catcher: false
select_type: global
gobal_component: 84301b2f-b0ae-4cc2-aec9-7cddc9ff530d
---
