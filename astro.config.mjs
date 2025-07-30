// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Orange Hack',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/austinleegordon/orange-hack-site' }],
			sidebar: [
				{
					label: 'Characters',
					items: [
						{ label: 'Create a character', slug: 'characters/create-a-character' },
						{ label: 'Ability scores', slug: 'characters/ability-scores' },
						{ label: 'Backgrounds', slug: 'characters/backgrounds' },
						{ label: 'Physical traits', slug: 'characters/physical-traits' },
						{
							label: 'Classes',
							items: [
								{ label: 'Dwarf', slug: 'characters/classes/dwarf' },
								{ label: 'Elf', slug: 'characters/classes/elf' },
								{ label: 'Halfling', slug: 'characters/classes/halfling' },
								{ label: 'Fighter', slug: 'characters/classes/fighter' },
								{ label: 'Scout', slug: 'characters/classes/scout' },
								{ label: 'Wizard', slug: 'characters/classes/wizard' },
							],
						},
						{ label: 'Starting equipment', slug: 'characters/starting-equipment' },
						{ label: 'Experience and advancement', slug: 'characters/experience-and-advancement' },
					],
				},
				{
					label: 'Procedures',
					items: [
						{ label: 'Checks and saves', slug: 'procedures/checks-and-saves' },
						{ label: 'Combat', slug: 'procedures/combat' },
						{ label: 'Resting', slug: 'procedures/resting' },
						{ label: 'Dungeon exploration', slug: 'procedures/dungeon-exploration' },
						{ label: 'Wilderness exploration', slug: 'procedures/wilderness-exploration' },
						{ label: 'Advancement', slug: 'procedures/advancement' },
					],
				},
				{
					label: 'Magic',
					items: [
						{ label: 'Casting spells', slug: 'magic/casting-spells' },
						{ label: 'Spell list', slug: 'magic/spell-list' },
					],
				},
			],
		}),
	],
});
