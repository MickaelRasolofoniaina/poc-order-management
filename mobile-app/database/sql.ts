export const INIT_DATABASE_SQL = `
    PRAGMA journal_mode = WAL;
    
    CREATE TABLE IF NOT EXISTS CUSTOMER (
        CustomerId INTEGER PRIMARY KEY AUTOINCREMENT,
        CompanyName TEXT,
        ContactName TEXT,
        Address TEXT,
        City TEXT,
        Region TEXT,
        PostalCode TEXT,
        Country TEXT,
        Phone TEXT
    );

    CREATE TABLE IF NOT EXISTS PRODUCT (
        ProductId INTEGER PRIMARY KEY AUTOINCREMENT,
        ProductName TEXT NOT NULL,
        Description TEXT,
        UnitPrice REAL NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "ORDER" (
        OrderId INTEGER PRIMARY KEY AUTOINCREMENT,
        CustomerId TEXT NOT NULL,
        OrderDate TEXT,
        ShippingDate TEXT,
        ShippingName TEXT,
        ShippingAddress TEXT,
        ShippingCity TEXT,
        ShippingRegion TEXT,
        ShippingPostalCode TEXT,
        ShippingCountry TEXT,
        ShippingPhone TEXT,
        FOREIGN KEY (CustomerId) REFERENCES CUSTOMER(CustomerId)
    );

    CREATE TABLE IF NOT EXISTS DETAIL_ORDER (
        DetailOrderId INTEGER PRIMARY KEY AUTOINCREMENT,
        OrderId INTEGER NOT NULL,
        ProductId INTEGER NOT NULL,
        UnitPrice REAL NOT NULL,
        Quantity INTEGER NOT NULL,
        FOREIGN KEY (OrderId) REFERENCES "ORDER"(OrderId),
        FOREIGN KEY (ProductId) REFERENCES PRODUCT(ProductId)
    );

    INSERT INTO CUSTOMER (CompanyName,ContactName,Address,City,Region,PostalCode,Country,Phone) VALUES
    ('La récrée des petits bouts', 'TAUREAU', '27 rue des fleurs','CHARTRES', 'EURE-ET-LOIR', '28000', 'FR', null),
    ('TARDIEU Antoinette', null, '11 Avenue du coin du bois', 'BOISEMONT','VAL-D OISE', '95000', 'FR', null),
    ('RAVIN Odile', null, '5 rue Mond', 'BOBIGNY', 'SEINE-ST-DENIS', '93000','FR', null),
    ('CRECHE LES LUTINS', 'TONGSAVARN', '44 rue Turenne', 'GRENOBLE', 'ISERE','38000', 'FR', null),
    ('LUDOTHEQUE ODYSSEE', 'VOEGEL', '35 rue Marbeuf', 'GRENOBLE', 'ISERE','38000', 'FR', null),
    ('IKEO', 'PLESSIS', '2 rue Gloxin', 'STRASBOURG', 'BAS-RHIN', '67000','FR', null),
    ('LUDO CLUB', 'ROUSSEAU', '13 rue source', 'MOLSHEIM', 'BAS-RHIN', '67120','FR', null),
    ('MOREL', 'MOREL', '128 route Guillon', 'COUBLEVIE', 'ISERE', '38500','FR', null);

    INSERT INTO PRODUCT (ProductName,Description,UnitPrice) VALUES
    ('ANIMATEUR/ANIMATRICE', 'ANIMATEUR/ANIMATRICE POUR LAJOURNEE', 162.00),
    ('ASSISTANT/ASSISTANTE', 'ASSISTANT/ASSISTANTE POUR LA JOURNEE', 62.71),
    ('MAGICIEN', 'MAGICIEN POUR LA JOURNEE', 365.80),
    ('PERE NOEL', 'PERE NOEL POUR LA JOURNEE', 209.03),
    ('MASCOTTE', 'MASCOTTE POUR LA JOURNEE', 62.71),
    ('CLOWNS', 'CLOWNS POUR LA JOURNEE', 313.55),
    ('ATELIER CREATION', 'ATELIER CREATION', 31.35),
    ('ATELIER BRICOLAGE', 'ATELIER BRICOLAGE', 31.35),
    ('ATELIER CUISINE', 'ATELIER CUISINE', 31.35),
    ('ATELIER SCULPTURE SUR BALLONS', 'ATELIER SCULPTURE SUR BALLONS', 31.35),
    ('ATTACHE-TETINE COEURS', 'ATTACHE-TETINE COEURS', 9.11),
    ('AU ZOO AVEC HECTOR LIVRE DE 3 A 6 ANS', 'AU ZOO AVEC HECTOR LIVRE DE 3 A6 ANS', 7.82),
    ('AVIONS TELECOMMANDES', 'AVIONS TELECOMMANDES', 55.18),
    ('SET GLADIATEUR', 'SET GLADIATEUR', 14.26),
    ('COFFRET BOUTIQUE MODE', 'COFFRET BOUTIQUE MODE', 22.90),
    ('POUPEE FASHION', 'POUPEE FASHION', 12.78);
`;
