// Primer Patrón Creacional: Builder
/* El patrón Builder se utiliza cuando necesitamos construir objetos complejos paso a paso. 
Es especialmente útil para evitar "constructores muy grandes" con demasiados parámetros*/

// PATRÓN BUILDER
// Propósito: Permite construir objetos complejos paso a paso. 
// El patrón permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.

// Producto Final: El objeto complejo que deseamos construir
class Computadora {
    public partes: string[] = [];

    mostrarConfiguracion(): void {
        console.log(`Configuración de la computadora: ${this.partes.join(", ")}`);
    }
}

// Interfaz Builder
interface Builder {
    reset(): void;
    setCPU(): void;
    setRAM(): void;
    setAlmacenamiento(): void;
    getResultado(): Computadora;
}

// Builder
class ComputadoraGamerBuilder implements Builder {
    private computadora!: Computadora;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.computadora = new Computadora();
    }

    setCPU(): void {
        this.computadora.partes.push("CPU High-End (i9-13900K)");
    }

    setRAM(): void {
        this.computadora.partes.push("64GB RAM DDR5");
    }

    setAlmacenamiento(): void {
        this.computadora.partes.push("2TB NVMe SSD");
    }

    getResultado(): Computadora {
        const result = this.computadora;
        this.reset();
        return result;
    }
}

// Director
class Director {
    private builder!: Builder;

    setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    construirComputadoraGamer(): void {
        this.builder.setCPU();
        this.builder.setRAM();
        this.builder.setAlmacenamiento();
    }
}

// --- EJECUCIÓN ---
const director = new Director();
const builderGamer = new ComputadoraGamerBuilder();

director.setBuilder(builderGamer);

console.log("Construyendo Computadora Gamer...");
director.construirComputadoraGamer();

const miPC = builderGamer.getResultado();
miPC.mostrarConfiguracion();