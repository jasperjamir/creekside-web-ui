import type { StructureResolver } from 'sanity/structure'

const singletonTypes = [
  { id: 'home', type: 'home', title: 'Home' },
  { id: 'whatWeDo', type: 'whatWeDo', title: 'What We Do' },
  { id: 'whoWeAre', type: 'whoWeAre', title: 'Who We Are' },
  { id: 'joinUs', type: 'joinUs', title: 'Join Us' },
  { id: 'families', type: 'families', title: 'For Families' },
  { id: 'parentResources', type: 'parentResources', title: 'Parent Resources' },
] as const

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items(
              singletonTypes.map(({ id, type, title }) =>
                S.listItem()
                  .id(id)
                  .title(title)
                  .schemaType(type)
                  .child(S.editor().id(id).schemaType(type).documentId(id))
              )
            )
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.some((s) => s.type === item.getId())
      ),
    ])
