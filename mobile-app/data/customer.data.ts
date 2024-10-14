export const TEST_CUSTOMERS_SQL = `
    INSERT INTO Customer (CustomerId,CompanyName,ContactName,Address,City,Region,PostalCode,Country,Phone) VALUES
    ('CL00001', 'La récrée des petits bouts', 'TAUREAU', '27 rue des fleurs','CHARTRES', 'EURE-ET-LOIR', '28000', 'FR', null),
    ('CL00002', 'TARDIEU Antoinette', null, '11 Avenue du coin du bois', 'BOISEMONT','VAL-D OISE', '95000', 'FR', null),
    ('CL00003', 'RAVIN Odile', null, '5 rue Mond', 'BOBIGNY', 'SEINE-ST-DENIS', '93000','FR', null),
    ('CL00004', 'CRECHE LES LUTINS', 'TONGSAVARN', '44 rue Turenne', 'GRENOBLE', 'ISERE','38000', 'FR', null),
    ('CL00005', 'LUDOTHEQUE ODYSSEE', 'VOEGEL', '35 rue Marbeuf', 'GRENOBLE', 'ISERE','38000', 'FR', null),
    ('CL00006', 'IKEO', 'PLESSIS', '2 rue Gloxin', 'STRASBOURG', 'BAS-RHIN', '67000','FR', null),
    ('CL00007', 'LUDO CLUB', 'ROUSSEAU', '13 rue source', 'MOLSHEIM', 'BAS-RHIN', '67120','FR', null),
    ('CL00008', 'MOREL', 'MOREL', '128 route Guillon', 'COUBLEVIE', 'ISERE', '38500','FR', null)
`;