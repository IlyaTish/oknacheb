<template lang='pug'>
  section.veka
    .veka-row-1
      p.veka-row-1__p-1 Наша компания рада предложить вам продукт экстра-класса: окна из&nbsp;профиля VEKA
      p.veka-row-1__p-2 VEKA&nbsp;&mdash; это <b>профили только класса&nbsp;А,</b> соответствующие RAL. В&nbsp;отличие от&nbsp;конкурентов, VEKA не&nbsp;выпускает профили эконом-класса.

    .veka-row-2
      .veka-table-cont
        .veka-table-cont__col-1
          image-item.veka-table-cont__img(:source='require("@/assets/images/profil-page/veka-fenster-01.png")')
          p.veka-table-cont__p VEKA&nbsp;&mdash; оконные и&nbsp;дверные профили из&nbsp;специального высококачественного профиля только класса А&nbsp;&mdash; хорошо известна оконным компаниям, архитекторам, стороителям и&nbsp;частным заказчикам более чем в&nbsp;60&nbsp;странах мира.
          .btn-blue(@click='showPopup({ name: "commonPopup" })') Подробнее

        .veka-table-cont__col-2
          h2.veka-table-cont__title Продукт экстра-класса:
          table.veka-table
            tr.veka-table__row-1
              td
              td
                image-item(:source='require("@/assets/images/profil-page/euroline.png")')
              td
                image-item(:source='require("@/assets/images/profil-page/softline.png")')

            tr.veka-table__row-2
              td
                image-item(:source='require("@/assets/images/profil-page/veka-logo.png")')
              td
                image-item(:source='require("@/assets/images/profil-page/veka-profil-01.png")')
              td
                image-item(:source='require("@/assets/images/profil-page/veka-profil-02.png")')

            tr.veka-table__row-3
              td Количество камер
              td 3
              td 5

            tr.veka-table__row-4
              td Толщина
              td 58мм
              td 70мм

            tr.veka-table__row-5
              td Теплопроводимость
              td 0,64 м2С/Вт
              td 0,78 м2С/Вт

            tr.veka-table__row-6
              td Армирование
              td Квадратное (усиленное)
              td Квадратное (усиленное)

            tr.veka-table__row-7
              td Область применения
              td Теплые или хорошо отапливаемые квартиры
              td Плохо отапливаемые квартиры и загородное строительство

            tr.veka-table__row-8
              td Фурнитура
              td
                image-item(:source='require("@/assets/images/profil-page/roto.png")')
              td
                image-item(:source='require("@/assets/images/profil-page/roto.png")')

            tr.veka-table__row-9
              td Класс энергоэффективности
              td
                image-item(:source='require("@/assets/images/profil-page/a.png")')
              td
                image-item(:source='require("@/assets/images/profil-page/a+.png")')

    .veka-row-3
      .veka-energo
        span.veka-energo__title Класс энергоэффективности
        image-item.veka-energo__img(:source='require("@/assets/images/profil-page/abc.png")')
      image-item.veka-row-3__img(:source='require("@/assets/images/profil-page/veka-fenster-02.png")')

      ul.veka-list
        li.veka-list__item
          .veka-list__num 1
          span.veka-list__txt Высокая шумоизоляция обеспечивает тишину и&nbsp;спокойствие вашего дома.

        li.veka-list__item
          .veka-list__num 2
          span.veka-list__txt Высокая теплоизоляция Uw=1,0&nbsp;W/m2K позволит заметно снизить расходы на&nbsp;отопление.

        li.veka-list__item
          .veka-list__num 3
          span.veka-list__txt Инновационный материал уплотнителей с&nbsp;увеличенным сроком службы позволит забыть о&nbsp;сквозняках.

        li.veka-list__item
          .veka-list__num 4
          span.veka-list__txt Усиленное оцинкованное &laquo;квадратное&raquo; армирование по&nbsp;всему контуру окна&nbsp;&mdash; придаёт наивысший показатель стабильности и&nbsp;жесткости конструкции. При таком армировании фурнитура вкручивается непосредственно в&nbsp;металл, что придаёт окну противовзломные свойства.

        li.veka-list__item
          .veka-list__num 5
          span.veka-list__txt Высококачественный пластик, устойчивый к&nbsp;воздействиям внешней среды, не&nbsp;нуждается ни&nbsp;в&nbsp;покраске, ни&nbsp;в&nbsp;любом ином специальном уходе.

    .veka-grid
      .veka-grid__item
        image-item.veka-grid__img(:source='require("@/assets/images/profil-page/pig.png")')
        span.veka-grid__title Экономия энергии и&nbsp;снижение затрат
        p.veka-grid__p Благодоря многокамерной технологии окна VEKA имею чрезвычайно низкий коэффициент теплопроводности. Это снижает потребление энергии и&nbsp;ваши расходы на&nbsp;отопление.

      .veka-grid__item
        image-item.veka-grid__img(:source='require("@/assets/images/profil-page/otboynik.png")')
        span.veka-grid__title Высокая шумоизляция
        p.veka-grid__p Воздействие шума влияетна здоровье и&nbsp;всего человека в&nbsp;целом. Окна VEKA даже в&nbsp;базовой комплектации избавят вас от&nbsp;этой проблемы. Так&nbsp;же VEKA позволяет изготовить окна с&nbsp;самыми высокими показателями звукоизоляции.

      .veka-grid__item
        image-item.veka-grid__img(:source='require("@/assets/images/profil-page/zamok.png")')
        span.veka-grid__title Повышенная безопасность
        p.veka-grid__p В&nbsp;зависимости от&nbsp;месторрасположения и&nbsp;доступности окна должны обладать определенными свойствами безопасности. На&nbsp;основе Ваших индивидуальных потребностей, окна VEKA могут быть оснащены усиленным стеклом, специальными ручками и&nbsp;аксессуарами для обеспечения большей безопасности.

      .veka-grid__item
        image-item.veka-grid__img(:source='require("@/assets/images/profil-page/domik.png")')
        span.veka-grid__title Почувствуйте комфорт
        p.veka-grid__p Превосходные характеристики изоляции окон VEKA не&nbsp;дадут Вам почувствовать перепада температуры на&nbsp;улице. А&nbsp;надежное двухконтурное уплотнение гарантирует отсутствие сквозняков.

      .veka-grid__item
        image-item.veka-grid__img(:source='require("@/assets/images/profil-page/palitra.png")')
        span.veka-grid__title Многообразие цветов
        p.veka-grid__p Красочные окна и&nbsp;двери, креативные решения. Окна VEKA доступны в&nbsp;более 30&nbsp;цветов радуги и&nbsp;текстуры дерева. У&nbsp;нас есть решение на&nbsp;любой вкус и&nbsp;тип дома.

      .veka-grid__item
        image-item.veka-grid__img(:source='require("@/assets/images/profil-page/okoshko.png")')
        span.veka-grid__title Инвестиции в&nbsp;будущее
        p.veka-grid__p Новые окна несомненно являются инвестицией. Они не&nbsp;только увеличат стоимость вашего дома, но&nbsp;и&nbsp;снизят эксплуатационные расходы, привнесут красоту в&nbsp;Ваш дом и&nbsp;избавят от&nbsp;многих проблем

    .veka-row-4
      image-item.veka-row-4__img(:source='require("@/assets/images/profil-page/veka-pic-03.png")')
      p.veka-row-4__p-1 Выбор VEKA&nbsp;&mdash; будь&nbsp;то профиль или окна из&nbsp;этого профиля&nbsp;&mdash; это выбор безопасности!
      image-item.veka-row-4__logo(:source='require("@/assets/images/profil-page/veka-pic-02.png")')
      p.veka-row-4__p-2 &mdash;&nbsp;VEKA существует только в&nbsp;оригинале, в&nbsp;отличие от&nbsp;конкурентов у&nbsp;VEKA нет аналогов, подделок, клонов и&nbsp;имитаций.
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'
  import ImageItem from '@/components/common-components/ImageItem/component'

  export default {
    mixins: [Mixins],
    components: {
      ImageItem
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
