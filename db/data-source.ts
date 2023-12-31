import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateUser1687144360459 } from './migrations/1687144360459-create-user';
import { User } from 'src/users/entities/user.entity';
import { Background } from 'src/backgrounds/entities/background.entity';
import { Document } from 'src/documents/entities/documents.entity';
import { Card } from 'src/cards/entities/cards.entity';
import { CreateBackground1687148252869 } from './migrations/1687148252869-create-background';
import { CreateDocument1687148812136 } from './migrations/1687148812136-create-document';
import { CreateCard1687148842117 } from './migrations/1687148842117-create-card';
import { AddUserIdToTables1687149533940 } from './migrations/1687149533940-add-user-id-to-tables';
import { DefaultValuesToDocumentTimestamps1687152830091 } from './migrations/1687152830091-default-values-to-document-timestamps';
import { AddTypeToDocument1689648991668 } from './migrations/1689648991668-add-type-to-document';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER ?? 'docker',
  password: process.env.POSTGRES_PASSWORD ?? 'docker',
  database: process.env.POSTGRES_DB ?? 'docker',
  entities: [User, Background, Document, Card],
  migrations: [
    CreateUser1687144360459,
    CreateBackground1687148252869,
    CreateDocument1687148812136,
    CreateCard1687148842117,
    AddUserIdToTables1687149533940,
    DefaultValuesToDocumentTimestamps1687152830091,
    AddTypeToDocument1689648991668,
  ],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
