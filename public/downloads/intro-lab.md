# Bell lab sheet

Qiskit 2.3.1. Local `StatevectorSampler`. No API key in this file.

Copy the circuit before `measure_all()` so a statevector can come from the unmeasured circuit. Qubit 0 is the rightmost bit. Ideal counts pile up on `00` and `11`. A computational-basis histogram is not, by itself, a complete proof of entanglement.

```python
from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

bell_circuit = QuantumCircuit(2)

bell_circuit.h(0)
bell_circuit.cx(0, 1)

measured_circuit = bell_circuit.copy()
measured_circuit.measure_all()

sampler = StatevectorSampler()
job = sampler.run([measured_circuit], shots=1024)
result = job.result()

counts = result[0].data["meas"].get_counts()

print(counts)
```

`bell_circuit = QuantumCircuit(2)` uses the class `QuantumCircuit`, the variable `bell_circuit`, a new object, the argument `2`, and assignment.

Composer order: Starting state, Hadamard, CNOT, measurement, counts.
