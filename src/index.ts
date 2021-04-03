import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import { Post } from "./entities/Post";

const main = async () => {
  console.log(':::::::::Starting::::::::');
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, { title: 'my first post' })
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
