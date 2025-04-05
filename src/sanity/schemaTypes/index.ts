import { type SchemaTypeDefinition } from 'sanity'
import about from './about';
import user from './portfolio';
import contact from './contact';
import project from './project';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, about, contact,project],
}
