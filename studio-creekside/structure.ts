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
        .id('who-we-are-group')
        .child(
          S.list()
            .title('Who We Are')
            .items([
              S.listItem()
                .title('Who We Are')
                .id('whoWeAre')
                .schemaType('whoWeAre')
                .child(S.editor().id('whoWeAre').schemaType('whoWeAre').documentId('whoWeAre')),
              S.listItem()
                .title('Our Story')
                .id('ourStory')
                .schemaType('ourStory')
                .child(
                  S.editor().id('ourStory').schemaType('ourStory').documentId('ourStory')
                ),
              S.listItem()
                .title('Our Team')
                .id('ourTeam')
                .schemaType('ourTeam')
                .child(
                  S.editor().id('ourTeam').schemaType('ourTeam').documentId('ourTeam')
                ),
            ])
        ),
      S.listItem()
        .title('Our Programs')
        .id('our-programs-group')
        .child(
          S.list()
            .title('Our Programs')
            .items([
              S.listItem()
                .title('What We Do')
                .id('whatWeDo')
                .schemaType('whatWeDo')
                .child(S.editor().id('whatWeDo').schemaType('whatWeDo').documentId('whatWeDo')),
              S.listItem()
                .title('Community-Based Instruction')
                .id('communityBasedInstruction')
                .schemaType('communityBasedInstruction')
                .child(
                  S.editor()
                    .id('communityBasedInstruction')
                    .schemaType('communityBasedInstruction')
                    .documentId('communityBasedInstruction')
                ),
            ])
        ),
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
        .id('support-group')
        .child(
          S.list()
            .title('Support')
            .items([
              S.listItem()
                .title('Support')
                .id('support')
                .schemaType('support')
                .child(S.editor().id('support').schemaType('support').documentId('support')),
              S.listItem()
                .title('Donate')
                .id('supportDonate')
                .schemaType('supportDonate')
                .child(
                  S.editor().id('supportDonate').schemaType('supportDonate').documentId('supportDonate')
                ),
              S.listItem()
                .title('In-Kind Donations')
                .id('supportInKindDonations')
                .schemaType('supportInKindDonations')
                .child(
                  S.editor()
                    .id('supportInKindDonations')
                    .schemaType('supportInKindDonations')
                    .documentId('supportInKindDonations')
                ),
            ])
        ),
      S.listItem()
        .title('Events')
        .id('events')
        .schemaType('events')
        .child(S.editor().id('events').schemaType('events').documentId('events')),
      S.listItem()
        .title('Join Our Team')
        .id('joinUs')
        .schemaType('joinUs')
        .child(S.editor().id('joinUs').schemaType('joinUs').documentId('joinUs')),
    ])
