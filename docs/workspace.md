### A. Creating the basic workspace

```bash
ng new ctk-wels --standalone --strict --style scss --skip-tests --routing --directory . --minimal -p www --create-application false -d
```

### B. Creating the shared component library

```bash
ng g library press --prefix prs --standalone
```

### C. Creating the initial application

```bash
ng g app www --routing --style scss --minimal
```
