export const rotate_vector = (base_x: number, base_y: number, target_x: number, target_y: number, angle: number) => {
  const rad = angle * Math.PI / 180;

  const diff_x = target_x - base_x;
  const diff_y = target_y - base_y;

  const new_x = (diff_x * Math.cos(rad) - diff_y * Math.sin(rad)) + base_x;
  const new_y = (diff_y * Math.cos(rad) + diff_x * Math.sin(rad)) + base_y;

  return { x: new_x, y: new_y };
}


export const get_angle = (center_x: number, center_y: number, target_x: number, target_y: number): number => {
  const delta_x = target_x - center_x;
  const delta_y = target_y - center_y;

  return Math.atan2(delta_y, delta_x);
}


export const get_distance = (source_x: number, source_y: number, target_x: number, target_y: number) => {
  const disX = source_x - target_x;
  const disY = source_y - target_y;

  return Math.sqrt((disX * disX) + (disY * disY));
}