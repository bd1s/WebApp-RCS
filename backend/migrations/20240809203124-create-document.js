'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('documents', {
            id_document: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titre: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            fichier: {
                type: Sequelize.BLOB('long'),
                allowNull: false,
            },
            id_utilisateur: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Utilisateurs',
                    key: 'id_utilisateur',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });

        await queryInterface.createTable('documents_partages', {
            id_partage: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_document: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'documents',
                    key: 'id_document',
                },
            },
            id_utilisateur_recepteur: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Utilisateurs',
                    key: 'id_utilisateur',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('documents_partages');
        await queryInterface.dropTable('documents');
    },
};
