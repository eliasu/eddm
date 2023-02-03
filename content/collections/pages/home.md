---
id: 3d3bc1f1-69cc-405a-bd68-eec19d6bb6b5
blueprint: landing_page
title: Home
headline_txt: 'Experimentierfeld für Co-kreation und Zeitgeist.'
text_color: black
background_color: none
text_bard:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Auf unserem Hof im Wendland könnt ihr im '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'statamic://entry::85656048-9eb4-4a84-8b63-4f792696998f'
              rel: null
              target: null
              title: null
        text: Gästehaus
      -
        type: text
        text: ' übernachten, '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'statamic://entry::a777de19-6a91-47cd-8764-70c2c7360bbe'
              rel: null
              target: null
              title: null
        text: 'Seminare, Workshops'
      -
        type: text
        text: ' und Retreats ausrichten und buchen, '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'statamic://entry::9a127640-9cfd-4e7b-b2ea-8f02e5b90fe5'
              rel: null
              target: null
              title: null
        text: 'Kunst- und Kulturangebote'
      -
        type: text
        text: ' genießen sowie in unserem Kreativ- und InnovationsLab arbeiten und gestalten.'
grid_field:
  -
    link_link: 'entry::7122e322-3b33-466c-b97c-f42a808f6b42'
    images_img: 23_EDdMxWendlandleben_ExperimentLandleben_04_00.jpg
    underline_txt: '14-tägiges Workation Special'
  -
    link_link: 'entry::85656048-9eb4-4a84-8b63-4f792696998f'
    images_img: Unterkunft_Intro_IMG_6172.jpg
    underline_txt: 'Gemeinschaftlich zuhause fühlen ab 75€/Nacht'
  -
    link_link: 'entry::2f1c364d-59df-4c82-8e25-0381462b2ac0'
    images_img: Home_Workation_TeamOffsite_zentralnorden_croped.jpg
    underline_txt: Teambuilding
  -
    link_link: 'entry::1ec56431-8b60-4b5e-8fab-e56716c1f498'
    images_img: max-van-den-oetelaar-buymYm3RQ3U-unsplash.jpg
    underline_txt: 'Mantra Mantra'
  -
    link_link: 'entry::94bb3526-f123-4786-9902-ca74e30a706a'
    images_img: Co-working_.jpg
    underline_txt: 'Workation What?'
updated_by: 83f8acb4-1aaa-4047-87ad-49aef2339080
updated_at: 1675251951
big_text_txt:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Auf unserem Hof im Wendland könnt ihr in unserem Gästehaus übernachten, Seminare Workshops und Retreats ausrichten und buchen, Kunst- und Kulturangebote genießen sowie in unserem Kreativ- und InnovationsLab arbeiten und gestalten.'
components:
  -
    headline_txt: 'Übernachten und Träumen'
    component_template: pano_slider
    images_img:
      - Traeumerei_DSC09422.jpg
      - Unterkunft_Home_02_traumerei.jpg
      - Unterkunft_Home_03_.jpg
      - Traeumerei_DSC09805.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'In unserem Gästehaus könnt ihr wählen zwischen Doppel- und Einzelzimmern mit eigenem Bad, Apartements und Zimmern mit geteiltem Bad. Wenn ihr lieber auf der Wiese schlafen wollt stehen 2 ausgebaute Bauwagen oder eure eigene, mitgebrachte Bleibe zur Option. Im Gästehaus können wir regulär 29 Personen unterbringen.'
      -
        type: set
        attrs:
          values:
            type: link
            link_name_txt: 'Mehr Details'
            link_type_url: 'entry::85656048-9eb4-4a84-8b63-4f792696998f'
            entry: 85656048-9eb4-4a84-8b63-4f792696998f
            target_blank: false
            link_type: entry
    type: image_text_component
    enabled: true
  -
    headline_txt: 'Kunst und Kultur - Futter für´s Herz'
    component_template: pano_slider
    images_img:
      - US_20210907_122-2.jpg
      - Kultur_5M7A7084.jpg
      - Kultur_5M7A9129.jpg
      - Kultur_5M7A6905_screen.jpg
      - Kultur_5M7A6527.jpg
      - Kultur_5M7A6797.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Von Klassik bis Techno, von Theater bis Tattooartist:in: hier ist ordentlich was los. Im Programm erfährst du unsere kommenden Veranstaltungen.'
      -
        type: set
        attrs:
          values:
            type: link
            link_name_txt: 'Ab zum Programm'
            link_type_url: 'entry::9a127640-9cfd-4e7b-b2ea-8f02e5b90fe5'
            entry: 9a127640-9cfd-4e7b-b2ea-8f02e5b90fe5
            target_blank: false
            link_type: entry
    type: image_text_component
    enabled: true
  -
    headline_txt: 'Workation: Arbeiten und Erholen an einem Ort? Im Team oder alleine?'
    component_template: pano_slider
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Ihr habt Lust Reisen in einem neuen Kontext auszuprobieren und Urlaub und Arbeiten an einem Ort mitten in der Natur zu verbinden? Ihr arbeitet an eurer Vision oder wollt ein neues Projekt kick-starten? Dann seit ihr hier genau richtig.'
    type: image_text_component
    enabled: true
    images_img:
      - Home_Workation_5M7A8387.jpg
      - Home_Workation_210509_MIII_0012.jpg
      - Home_Workation_IMG_8163_1080x1080.jpg
      - Home_Workation_5M7A6051.jpg
  -
    headline_txt: 'Protopia Lab'
    component_template: pano_slider
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
            text: 'Das Lab verstehen wir als Inkubator für kreativ-innovative Lösungen, Produkte, neue interdisziplinäre Arbeitsformen und digitale Arbeitswelten. Neben der eigenständigen Projektarbeit steht das Labor Universitäten, Firmen, Start-ups und Einzelpersonen offen und bietet auf 700m² Seminar-und Yogaraum, Co-Working- und Makerspace, Ausstellungsfläche und Veranstaltungsraum.'
    type: image_text_component
    enabled: false
  -
    headline_txt: 'Essen und Trinken in der Kaoskantine'
    component_template: pano_slider
    images_img:
      - gastro_004.jpg
      - gastro_001.jpg
      - gastro_002.jpg
      - gastro_003.jpg
      - gastro_005.jpg
    background_color: none
    text_color: black
    text_bard:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Auf unserem Speiseplan stehen unsere Lieblingsgerichte aus aller Welt. Nach dem Motto “du bist was du isst” kommen bei uns überwiegend biologische, regionale und saisonale Produkte auf den Tisch.\_"
      -
        type: set
        attrs:
          values:
            type: link
            link_name_txt: 'Mehr Details'
            link_type_url: 'entry::9a127640-9cfd-4e7b-b2ea-8f02e5b90fe5'
            entry: bb1aa023-7670-4354-98a2-6c3c41b07bf1
            target_blank: false
            link_type: entry
    type: image_text_component
    enabled: true
template: home
template_field: layout
full_width: false
disable_eye-catcher: true
headline_eye-catcher: HEadline
text_eye-catcher:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Text undso'
  -
    type: set
    attrs:
      values:
        type: button
        link_name_txt: Button
        link_type_url: google.de
seotamic_title: custom
seotamic_custom_title: 'Ein Ding der Möglichkeit'
seotamic_title_prepend: false
seotamic_title_append: false
seotamic_meta_description: general
seotamic_open_graph_title: general
seotamic_open_graph_description: general
seotamic_twitter_title: title
seotamic_twitter_description: general
images_img: salderatzen_hero.jpg
---
