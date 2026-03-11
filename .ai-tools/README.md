# AI Tools Configuratie

Deze map bevat gecentraliseerde configuraties voor verschillende AI development tools.

## Mappenstructuur

### agents/
Agent configuraties van verschillende tools (voorheen .codex, .qodo)

### workflows/
Workflow definities en automation scripts (voorheen .agents/workflows)

### templates/
Templates voor specs, plans en andere documenten (voorheen .specify/templates)

## Actieve Tools

De `.kiro/` map in de root blijft de actieve configuratie voor Kiro IDE.

## Migratie

Deze map consolideert configuraties van:
- `.agents/` → workflows
- `.codex/` → agents
- `.gemini/` → (TOML configs blijven in .gemini voor compatibiliteit)
- `.qodo/` → agents
- `.specify/` → templates

Oude mappen zijn toegevoegd aan .gitignore en kunnen veilig verwijderd worden na verificatie.
