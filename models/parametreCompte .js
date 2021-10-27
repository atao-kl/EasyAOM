module.exports = function (sequelize, DataTypes) {
    const ParametreCompte = sequelize.define('parametrecompte', {
        typecompte: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
             },
          
            periodrecherch: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            nbrmaxaoafficher: {
                type: DataTypes.INTEGER,
                allowNull: true,
            defaultValue: null,
            },
            nbrmaxdcegratuit: {
                type: DataTypes.INTEGER,
                allowNull: true,
            defaultvalue: null,
            },
            nbrmaxfavorisajouter: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            nbrdcegratuittelecharger: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            sourcing: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
            recherche_objet: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            recherche_avis_clotures: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            recherche_avis_attribution: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            dedoublonage: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            sauvegarde_recherche: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            donnees_essentielles: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            contacts: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            departement_execution: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            avis_complet: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            partage_annonces: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            ajout_agenda: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            gestion_favoris: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            grille_ao: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

  /* ParametreCompte.associate = function (models) { 
        ParametreCompte.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };*/
    
    return ParametreCompte;
};
