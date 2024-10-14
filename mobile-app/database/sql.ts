export const INIT_DATABASE_SQL = `
    PRAGMA journal_mode = WAL;
    
    CREATE TABLE IF NOT EXISTS customer (
        customerId INTEGER PRIMARY KEY AUTOINCREMENT,
        companyName TEXT,
        contactName TEXT,
        address TEXT,
        city TEXT,
        region TEXT,
        postalCode TEXT,
        country TEXT,
        phone TEXT
    );

    CREATE TABLE IF NOT EXISTS product (
        productId INTEGER PRIMARY KEY AUTOINCREMENT,
        productName TEXT NOT NULL,
        description TEXT,
        unitPrice REAL NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "order" (
        orderId INTEGER PRIMARY KEY AUTOINCREMENT,
        customerId TEXT NOT NULL,
        orderDate TEXT,
        shippingDate TEXT,
        shippingName TEXT,
        shippingAddress TEXT,
        shippingCity TEXT,
        shippingRegion TEXT,
        shippingPostalCode TEXT,
        shippingCountry TEXT,
        shippingPhone TEXT,
        FOREIGN KEY (customerId) REFERENCES customer(customerId)
    );

    CREATE TABLE IF NOT EXISTS detailOrder (
        detailOrderId INTEGER PRIMARY KEY AUTOINCREMENT,
        orderId INTEGER NOT NULL,
        productId INTEGER NOT NULL,
        unitPrice REAL NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (orderId) REFERENCES "order"(orderId),
        FOREIGN KEY (productId) REFERENCES product(productId)
    );

    INSERT INTO customer (companyName,contactName,address,city,region,postalCode,country,phone) VALUES
    ('La récrée des petits bouts', 'TAUREAU', '27 rue des fleurs','CHARTRES', 'EURE-ET-LOIR', '28000', 'FR', null),
    ('TARDIEU Antoinette', null, '11 Avenue du coin du bois', 'BOISEMONT','VAL-D OISE', '95000', 'FR', null),
    ('RAVIN Odile', null, '5 rue Mond', 'BOBIGNY', 'SEINE-ST-DENIS', '93000','FR', null),
    ('CRECHE LES LUTINS', 'TONGSAVARN', '44 rue Turenne', 'GRENOBLE', 'ISERE','38000', 'FR', null),
    ('LUDOTHEQUE ODYSSEE', 'VOEGEL', '35 rue Marbeuf', 'GRENOBLE', 'ISERE','38000', 'FR', null),
    ('IKEO', 'PLESSIS', '2 rue Gloxin', 'STRASBOURG', 'BAS-RHIN', '67000','FR', null),
    ('LUDO CLUB', 'ROUSSEAU', '13 rue source', 'MOLSHEIM', 'BAS-RHIN', '67120','FR', null),
    ('MOREL', 'MOREL', '128 route Guillon', 'COUBLEVIE', 'ISERE', '38500','FR', null);

    INSERT INTO product (productName,description,unitPrice) VALUES
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
