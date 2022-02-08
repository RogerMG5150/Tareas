var=Mes("ingrese un valor entre 1 y 12")
switch("ingreso") {
	case "12":
	case "1":
	case "2":
		console.log("INVIERNO")
	break;
	case "3":
	case "4":
	case "5":
		console.log("PRIMAVERA")
	break;
	case "6":
	case "7":
	case "8":
		console.log("VERANO")
	break;
	case "9":
	case "10":
	case "11":
		console.log("OTOÑO")
	break;
	default:
		console.log("disfrute la estacion escogida")
}