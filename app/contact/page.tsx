"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます！");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>お問い合わせ</h1>
        <p className={styles.description}>
          ご質問やご相談がございましたら、お気軽にお問い合わせください
        </p>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  お名前 <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="山田 太郎"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  メールアドレス <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="example@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  メッセージ <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                送信する
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>⏰ 返信時間</h2>
              <p className={styles.infoText}>
                通常1〜2営業日以内にご返信いたします
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
