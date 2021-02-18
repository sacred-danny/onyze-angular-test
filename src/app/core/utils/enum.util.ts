import { Option } from '../models/option';

export function enumToLabel(source: any, isDashCase = false, labels?: any, isCapital = false): string {
  if (labels) {
    return labels[source];
  }
  if (source === '' || !source) {
    return '';
  }
  const list = source.split('_');
  return list.map((item: any) => {
    const labelItem = item.toLowerCase();
    return isCapital ? item.toUpperCase() : (labelItem[0].toUpperCase() + labelItem.slice(1));
  }).join(isDashCase ? '-' : ' ');
}

export function enumToOptions<T>(source: any, labels?: any, isCapital = false): Option<T>[] {
  return Object.keys(source).map(key => {
    return { label: enumToLabel(source[key], labels, isCapital), value: source[key] };
  });
}
