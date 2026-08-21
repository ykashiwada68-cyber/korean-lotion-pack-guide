"use client";

import { useRef } from "react";
import Link from "next/link";
import { packTypes } from "@/data/packTypes";
import { concerns } from "@/data/concerns";
import { skinTypes } from "@/data/skinTypes";

export function FilterForm({
  defaultValues,
}: {
  defaultValues: { q: string; type: string; concern: string; skin: string };
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      method="get"
      className="grid gap-4 rounded-2xl border border-line bg-white p-5 sm:grid-cols-2 lg:grid-cols-4"
      aria-label="商品の絞り込み"
    >
      <div className="lg:col-span-4">
        <label htmlFor="q" className="mb-1.5 block text-sm font-semibold text-ink">
          商品名・ブランド名で検索
        </label>
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={defaultValues.q}
          placeholder="例：トナーパッド、Anua など"
          className="w-full rounded-full border border-line bg-ivory px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark"
        />
      </div>

      <div>
        <label htmlFor="type" className="mb-1.5 block text-sm font-semibold text-ink">
          種類
        </label>
        <select
          id="type"
          name="type"
          defaultValue={defaultValues.type}
          onChange={() => formRef.current?.requestSubmit()}
          className="w-full rounded-full border border-line bg-ivory px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark"
        >
          <option value="">すべて</option>
          {packTypes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="concern" className="mb-1.5 block text-sm font-semibold text-ink">
          肌悩み
        </label>
        <select
          id="concern"
          name="concern"
          defaultValue={defaultValues.concern}
          onChange={() => formRef.current?.requestSubmit()}
          className="w-full rounded-full border border-line bg-ivory px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark"
        >
          <option value="">すべて</option>
          {concerns.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="skin" className="mb-1.5 block text-sm font-semibold text-ink">
          肌質
        </label>
        <select
          id="skin"
          name="skin"
          defaultValue={defaultValues.skin}
          onChange={() => formRef.current?.requestSubmit()}
          className="w-full rounded-full border border-line bg-ivory px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark"
        >
          <option value="">すべて</option>
          {skinTypes.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-end gap-3 lg:col-span-4">
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-ivory hover:bg-rose-dark"
        >
          絞り込む
        </button>
        <Link href="/products" className="text-sm font-semibold text-ink-soft hover:text-rose-dark">
          条件をクリア
        </Link>
      </div>
    </form>
  );
}
