/********************* Create monument table ******************/

CREATE TABLE monument(
    id_monument BIGSERIAL NOT NULL PRIMARY KEY,
    designation VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    image_url VARCHAR(2083),
    epoque VARCHAR (50),
    fonction VARCHAR,
    status VARCHAR,
    accessibilite VARCHAR,
    relief VARCHAR,
    duree_de_visite INT,
    heure_ouverture_ete timestamptz ,
    heure_fermeture_ete timestamptz ,
    importance VARCHAR,
    telephone INT,
    adresse VARCHAR,
    longitude INT,
    latitude INT,
    priorite INT,
    etat_de_conservation INT,
    heure_ouverture_hier timestamptz ,
    heure_fermeture_hier timestamptz
);

/********************* Create circuit table ******************/

CREATE TABLE circuit(
    id_circuit BIGSERIAL NOT NULL PRIMARY KEY,
    duree_circuit INT,
    nombre_etape INT,
    kilometrage INT,
    point_de_depart INT
);

/********************* Create commande table ******************/

CREATE TABLE commande(
    id_commande BIGSERIAL NOT NULL PRIMARY KEY,
    quantite INT NOT NULL,
    date_commande timestamptz NOT NULL,
    mode_reception VARCHAR(50),
    point_de_depart VARCHAR(50)
);

/********************* Create thematique table ******************/

CREATE TABLE thematique(
    id_thematique BIGSERIAL NOT NULL PRIMARY KEY,
    categorie VARCHAR(50)
);

/********************* Create personnalise table ******************/
CREATE TABLE personnalise(
    id_personnalise BIGSERIAL NOT NULL PRIMARY KEY,
    temps_de_depart timestamptz
);


/********************* Create User table ******************/

CREATE TABLE utilisateur (
id SERIAL NOT NULL PRIMARY KEY,
nom VARCHAR(20),
prenom VARCHAR(20),
age INTEGER,
centre_interets VARCHAR(50),
email VARCHAR(50) NOT NULL ,
mot_de_passe VARCHAR(20) NOT NULL,
num_tel INTEGER,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW (),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW ()
);

/********************* Create Partenaire table ******************/

CREATE TABLE partenaire (
id_partenaire SERIAL NOT NULL PRIMARY KEY,
adresse VARCHAR(30),
categorie VARCHAR(20),
tel_partenaire INTEGER,
statut VARCHAR(20),
heure_ouverture TIMESTAMPTZ NOT NULL ,
heure_fermeture  TIMESTAMPTZ NOT NULL 
);


/********************* Create Reservation table ******************/

CREATE TABLE reservation (
id_res SERIAL NOT NULL PRIMARY KEY,
heure_reservation TIMESTAMPTZ NOT NULL ,
date_res  TIMESTAMPTZ NOT NULL 
);


/********************* Create Guide table ******************/

CREATE TABLE guide (
id_guide SERIAL NOT NULL PRIMARY KEY,
nom_guide VARCHAR(20) NOT NULL,
prenom_guide VARCHAR(20) NOT NULL,
tel_guide INTEGER NOT NULL,
specialite VARCHAR(20)
);


/********************* Create Boutique table ******************/

CREATE TABLE boutique (
id_boutique SERIAL NOT NULL PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
propretaire VARCHAR NOT NULL,
addresse VARCHAR NOT NULL,
tel_prop INTEGER 

);


/********************* Create Article table ******************/

CREATE TABLE article (
id_article SERIAL NOT NULL PRIMARY KEY,
nom_article VARCHAR(50) NOT NULL,
stock INTEGER ,
prix INTEGER 
);

