### Rust tool for importing Drug Bank XML data to SurrealDB


```sh
➜  drugbankdb git:(master) grep '<drug ' /portable/DrugBank.xml | wc -l # rough estimate of number of drugs
16581 
```

## Deno with Jupyter (does not work currently)

```sh
deno jupyter --install
# Then open VSCodium and pick Deno as kernel
```


TODO:

- [ ] Insert drug interaction as `record` graph edges.
- [ ] Convert types, `created` as date, `average-mass` as float