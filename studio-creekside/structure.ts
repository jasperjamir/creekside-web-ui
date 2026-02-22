import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Home')
        .id('home')
        .schemaType('home')
        .child(S.editor().id('home').schemaType('home').documentId('home')),
      S.listItem()
        .title('Who We Are')
        .id('whoWeAre')
        .schemaType('whoWeAre')
        .child(S.editor().id('whoWeAre').schemaType('whoWeAre').documentId('whoWeAre')),
      S.listItem()
        .title('Our Programs')
        .id('whatWeDo')
        .schemaType('whatWeDo')
        .child(S.editor().id('whatWeDo').schemaType('whatWeDo').documentId('whatWeDo')),
      S.listItem()
        .title('Families')
        .id('families-group')
        .child(
          S.list()
            .title('Families')
            .items([
              S.listItem()
                .title('For Families')
                .id('families')
                .schemaType('families')
                .child(S.editor().id('families').schemaType('families').documentId('families')),
              S.listItem()
                .title('Parent Resources')
                .id('parentResources')
                .schemaType('parentResources')
                .child(
                  S.editor().id('parentResources').schemaType('parentResources').documentId('parentResources')
                ),
            ])
        ),
      S.listItem()
        .title('Support')
        .id('supportDonate')
        .schemaType('supportDonate')
        .child(
          S.editor().id('supportDonate').schemaType('supportDonate').documentId('supportDonate')
        ),
      S.listItem()
        .title('Join Us')
        .id('joinUs')
        .schemaType('joinUs')
        .child(S.editor().id('joinUs').schemaType('joinUs').documentId('joinUs')),
    ])
