export default class Settings {
  public static APP_PORT: number = parseInt(process.env.APP_PORT);
  public static NODE_ENV: string = process.env.NODE_ENV;
  public static DB_CONN: any = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/typeorm/**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/typeorm/**/*.subscriber{.ts,.js}'],
    logging: process.env.TYPEORM_LOGGING,
    logger: process.env.TYPEORM_LOGGER,
    options: { trustServerCertificate: true },
  };
}
