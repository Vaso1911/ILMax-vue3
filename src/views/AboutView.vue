<template>
  <Header />
  <section class="about section-p">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6">
          <h2 class="title mb-4">О компании&nbsp;<span class="text-primary">ИлМакс</span></h2>
          <p class="lead">
            Юридическая компания «ИлМакс» была основана двумя профессионалами своего дела - 
            Ильей и Максимом, объединившими многолетний опыт работы в государственных структурах 
            и частной практике для оказания качественных юридических услуг.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="about-hero-img">
            <!-- Заглушка для общего фото или логотипа -->
            <img src="@/assets/img/about-hero.jpg" alt="Команда ИлМакс" class="img-fluid rounded">
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Карточка Ильи -->
        <div class="col-lg-6 mb-5">
          <div class="team-card">
            <div class="row">
              <div class="col-md-4">
                <div class="team-img">
                  <img src="@/assets/img/ilya-photo.jpg" alt="Илья - сооснователь" class="img-fluid rounded">
                </div>
              </div>
              <div class="col-md-8">
                <div class="team-info">
                  <h3 class="team-name">Илья</h3>
                  <p class="team-position">Сооснователь, ведущий юрист</p>
                  <div class="team-story">
                    <p>
                      Свою карьеру Илья начал в органах прокуратуры, где прошел путь от помощника прокурора 
                      до старшего следователя. За 7 лет работы в прокуратуре он участвовал в расследовании 
                      более 200 уголовных дел различной категории сложности.
                    </p>
                    <p>
                      После этого перешел в Следственный комитет, где специализировался на экономических 
                      преступлениях и коррупционных схемах. Накопленный опыт позволил ему глубоко понимать 
                      механизмы работы государственных структур и тонкости процессуального законодательства.
                    </p>
                    <p>
                      В 2018 году Илья переехал в Калининград, где устроился в крупную юридическую фирму. 
                      Именно там он познакомился с Максимом, и вместе они решили создать собственную компанию, 
                      основанную на принципах честности, профессионализма и индивидуального подхода к каждому клиенту.
                    </p>
                  </div>
                  <div class="team-stats">
                    <span class="stat-item">12+ лет опыта</span>
                    <span class="stat-item">500+ выигранных дел</span>
                    <span class="stat-item">Специализация: уголовное право</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Карточка Максима -->
        <div class="col-lg-6 mb-5">
          <div class="team-card">
            <div class="row">
              <div class="col-md-4">
                <div class="team-img">
                  <img src="@/assets/img/maxim-photo.jpg" alt="Максим - сооснователь" class="img-fluid rounded">
                </div>
              </div>
              <div class="col-md-8">
                <div class="team-info">
                  <h3 class="team-name">Максим</h3>
                  <p class="team-position">Сооснователь, руководитель практики</p>
                  <div class="team-story">
                    <p>
                      Максим - ветеран боевых действий, прошедший службу в Вооруженных Силах РФ. 
                      После демобилизации он решил связать свою жизнь с юриспруденцией, чтобы помогать 
                      людям защищать свои права и законные интересы.
                    </p>
                    <p>
                      Окончил с отличием юридический факультет Балтийского федерального университета 
                      имени И. Канта. Начал карьеру в сфере гражданского права, специализируясь на 
                      жилищных спорах и защите прав военнослужащих.
                    </p>
                    <p>
                      Благодаря армейскому опыту Максим обладает железной выдержкой, стрессоустойчивостью 
                      и умением принимать взвешенные решения в сложных ситуациях. Его подход к работе 
                      сочетает военную дисциплину и глубокие знания законодательства.
                    </p>
                    <p>
                      Встреча с Ильей стала поворотным моментом в карьере Максима. Объединив усилия, 
                      они создали компанию, где военная выдержка встречается с следовательской дотошностью, 
                      обеспечивая клиентам максимальную защиту.
                    </p>
                  </div>
                  <div class="team-stats">
                    <span class="stat-item">8+ лет опыта</span>
                    <span class="stat-item">Ветеран боевых действий</span>
                    <span class="stat-item">Специализация: гражданское право</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок философии компании -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="philosophy-card bg-light p-5 rounded">
            <h3 class="text-center mb-4">Наша философия</h3>
            <div class="row">
              <div class="col-md-6">
                <h5>Почему «ИлМакс»?</h5>
                <p>
                  Название компании образовано от имен основателей - Ильи и Максима. 
                  Но для нас это не просто имена - это символ объединения двух разных, 
                  но взаимодополняющих подходов к юриспруденции.
                </p>
              </div>
              <div class="col-md-6">
                <h5>Наши принципы</h5>
                <ul class="principles-list">
                  <li>Честность и прозрачность во всем</li>
                  <li>Индивидуальный подход к каждому делу</li>
                  <li>Профессионализм, подкрепленный опытом</li>
                  <li>Ответственность за результат</li>
                  <li>Доступность юридической помощи</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

// Компонент не требует логики, только отображение
</script>

<style scoped>
.about {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.team-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-img {
  margin-bottom: 1.5rem;
}

.team-img img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: 3px solid #007bff;
}

.team-name {
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.team-position {
  color: #6c757d;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.team-story p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #495057;
}

.team-stats {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e9ecef;
}

.stat-item {
  display: block;
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
}

.principles-list {
  list-style: none;
  padding: 0;
}

.principles-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #dee2e6;
  position: relative;
  padding-left: 1.5rem;
}

.principles-list li:before {
  content: "✓";
  color: #28a745;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.philosophy-card {
  border-left: 5px solid #007bff;
}

.about-hero-img img {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

/* Адаптивность */
@media (max-width: 768px) {
  .team-card {
    padding: 1.5rem;
  }
  
  .team-img {
    text-align: center;
  }
  
  .team-img img {
    width: 200px;
    height: 200px;
  }
}
</style>