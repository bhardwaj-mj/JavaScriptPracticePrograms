function towerOfHanoi(numberOfDisks, fromRod, toRod, usingRod) {
  if (numberOfDisks === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(numberOfDisks - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${numberOfDisks} from ${fromRod} to ${toRod}`);
  towerOfHanoi(numberOfDisks - 1, usingRod, toRod, fromRod);
}
towerOfHanoi(3, "A", "C", "B");
