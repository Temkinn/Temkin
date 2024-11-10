import styles from "./component.module.css"

export default function Component({name}) {
	return (
	  <div className={styles.container}>
		<div className={styles.photo} />
		<h1>{name}</h1>
		<div className={styles.butcontainer}>
            <button className={styles.button}>kwa</button>
			<button className={styles.button}>kwa</button>
		</div>
		<button className={styles.button}>kwa</button>
	  </div>
	)
}
  