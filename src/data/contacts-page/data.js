const Office = {
  id: 1,
  title: 'Офис продаж на\u00A0заливе г. Чебоксары',
  subtitle:
    'Мы\u00A0ждем вас по\u00A0адресу ТК\u00A0"Дом Мод", 5\u00A0этаж, офис 512.',
  img_01: require('@/assets/images/contacts-page/pic-01@2x.jpg'),
  img_02: require('@/assets/images/contacts-page/pic-02@2x.jpg'),
  map: {
    coords: [56.144318996577906, 47.24788471163939],
    markerCoord: [56.1445520686019, 47.247691999999994]
  }
};

const Warehouse = {
  id: 2,
  temp_2: true,
  title: 'Наш склад в\u00A0Чебоксарах',
  subtitle: 'Кабельный пр-зд, 6',
  img_01: require('@/assets/images/contacts-page/pic-03@2x.jpg'),
  img_02: require('@/assets/images/contacts-page/pic-04@2x.jpg'),
  map: {
    coords: [56.118760467642886, 47.297124321075444],
    markerCoord: [56.118960467642886, 47.297024321075444]
  }
};

export { Office, Warehouse }
