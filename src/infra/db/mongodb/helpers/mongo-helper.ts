import { type Collection, Db, MongoClient } from 'mongodb'

const MONGO_URL = 'mongodb://localhost:27017/'
const DB_NAME = 'defaultdb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  db: Db,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(MONGO_URL, {})
    this.db = this.client.db(DB_NAME)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.db.collection(name)
  },

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id.toString() })
  }
}
