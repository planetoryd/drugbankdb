use anyhow::Result;
use std::fs::File;
use std::io::Read;
use surrealdb;
use xml;

// const PATH: &str = "/portable/DrugBank.xml";
const PATH: &str = "./RustyXML/beh.xml";

fn main() -> Result<()> {
    let mut rd = File::open(PATH)?;
    let mut p = xml::Parser::new();
    let mut e = xml::ElementBuilder::new();
    let mut found = 0;
    let mut buf = [0; 2000];
    rd.read(&mut buf)?;
    let deco = String::from_utf8(buf.to_vec())?;
    p.feed_str(&deco);
    // dbg!(&deco);
    for ev in p {
        let x = e.handle_event(ev);
        if let Some(el) = x {
            let el = el?;
            let jsn = serde_json::to_string_pretty(&el)?;
            println!("{}", jsn);
            found += 1;

            if found > 10 {
                break;
            }
        }
    }
    Ok(())
}
