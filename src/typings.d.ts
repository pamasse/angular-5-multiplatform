/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// TODO Remove this line which is redoundant with the types file 'web-ext-types' imported in ../tsconfig.json
declare var browser;
declare var chrome;
