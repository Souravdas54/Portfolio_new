import { type SchemaTypeDefinition } from 'sanity'
import about from './about';
import user from './portfolio';
import contact from './contact';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user,about,contact],
}
