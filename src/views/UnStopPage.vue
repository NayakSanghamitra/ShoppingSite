
<template>
  <div class="unstop_body">
    <div class="sidebar">
    <div class="sidebar-option">
        <div class="icon-container">
            <i class="fas fa-tachometer-alt icon"></i>
            <span>Dashboard</span>
        </div>
    </div>
    <div class="sidebar-option active">
    <div class="card-like">
        <div class="card-content">
            <i class="fas fa-poll-h icon"></i>
            <span>Assessment</span>
        </div>
    </div>
</div>
    <div class="sidebar-option">
        <div class="icon-container">
            <i class="fas fa-book icon"></i>
            <span>My Library</span>
        </div>
    </div>
    <div class="break-line"></div>
    <div class="sidebar-option admin-option">
        <div class="admin-card">Admin</div>
    </div>
    <div class="sidebar-option">
        <div class="icon-container">
            <i class="far fa-circle icon"></i>
            <span>Round Status</span>
        </div>
    </div>
</div>

    <div class="content">
      <div class="assessment-header">
        <h1>Assessments<span class="break"> | </span><span class="active">My Assessment</span></h1>
      </div>
      <hr class="my-2 custom-underline">
      <div class="section-header mt-4">
        <h2>Assessment Overview</h2>
      
      </div>
      <div class="assessments-overview">
                                <div class="overview-item">
                                    <div class="item-label">Total Assignment</div>
                                    <div class="item-value"> <i class="fas fa-certificate icon"></i> 34</div>
                                </div>
                                <div class="overview-item">
                                    <div class="item-label">Candidates</div>
                                    <div class="item-value"> <i class="fas fa-user icon"></i> Total Candidate | Who Attempt</div>
                                </div>
                                <div class="overview-item">
                                    <div class="item-label">Candidate Source</div>
                                    <div class="item-value">  <i class="fas fa-globe icon"></i> E-mail | Social Share | Unique Link</div>
                                </div>
                                <div class="overview-item">
  <div class="item-icon"></div>
  <div class="item-label"> Total Assignment</div>
  <div class="item-value"><i class="fas fa-paperclip"></i> 34</div>
</div>
                            </div>

                            <div class="section-header mt-4">
                                <h2 class="mb-3 section-title">My Assessments</h2>
                            </div>
                            <div class="my-assessment">
                                <div class="assessment-card border-primary">
                                    <div class="border-bottom">
                                        <div class="circle-with-plus">+</div>
                                    </div>
                                    <div class="card-text">New Assessment</div>
                                    <p class="card-text">From here you can add questions</p>
                                </div>
                                <div class="assessment-card border-light">
                                    <div class="corner-icon">
                                        <i class="fas fa-briefcase"></i>
                                    </div>
                                    <div class="corner-icon more-icon">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                    <div class="card-text">Math Assessment</div>
                                    <div class="card-subtext">
                                        Job <i class="far fa-calendar-alt"></i> Date
                                    </div>
                                    <hr class="break-line">
                                    <div class="info-section">
                                        <div class="info-value">00 00</div>
                                        <div class="info-label">Duration</div>
                                        <!-- <div class="info-value">00</div>
                                        <div class="info-label">Questions</div> -->
                                    </div>
                                    <div class="share-section">
                                        <div class="share-icon">
                                            <i class="fas fa-share-alt"></i>
                                        </div>
                                        <div class="lp-background">LP</div>
                                    </div>
                                </div>
                                <div class="assessment-card border-light">
    <div class="corner-icon left-icon">
      <i class="fas fa-briefcase"></i>
    </div>
    <div class="corner-icon more-icon">
      <i class="fas fa-ellipsis-v"></i>
    </div>
    <div class="card-text">Math Assessment</div>
    <div class="card-subtext">
      <i class="fas fa-suitcase"></i> Job <i class="far fa-calendar-alt"></i> Date
    </div>
    <hr class="break-line">
    <div class="info-section">
      <div class="info-value">
        <i class="far fa-clock info-icon"></i> 00
        <i class="far fa-question-circle info-icon"></i> 00
      </div>
      <div class="info-label">Duration Questions</div>
    </div>
    <div class="share-section">
      <div class="share-card">
        <div class="attachment-icon">
          <i class="fas fa-paperclip"></i>
        </div>
        <div class="share-text">Share</div>
      </div>
      <div class="lp-background">LP</div>
    </div>
  </div>
                                <!-- Add more assessment cards as needed -->
                        
    </div>
  </div>
  </div>
</template>

<style scoped>
.unstop_body {
  display: flex;
  padding: 5rem;
  background-color: #f8f8f8;
  height: 100vh;
  
}

.sidebar {
  background-color: white;
  color: #232323;
  width: 150px;
  padding: 20px;
  margin-right: 20px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
}

.sidebar-option {
    margin-bottom: 10px;
    color: blue;
}

.sidebar-option.active {
    background-color: #f8f8f8;
    border-left: 4px solid blue;
}

.icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon {
    margin-bottom: 5px;
}

.admin-option {
    display: flex;
    align-items: center;
}

.admin-text {
    color: red;
    margin-left: 5px;
}

.break-line {
    border: none;
    border-top: 1px dashed #ccc;
    margin: 10px 0;
}
.admin-card {
   
    color: red;
    padding: 10px;
    border: 1px solid red;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-like {
   
    color: blue;
    padding: 10px;
    border: 1px solid blue;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.content {
  flex: 1;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow: auto;
}

.assessment-header,
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
   color: navy;
}

.assessment-header h1,
.section-header h2 {
  margin: 0;
  font-size: 24px;
}

.break {
  font-size: 28px;
  color: #0a84ff;
  margin: 0 10px;
}

.active {
  color: #0a84ff;
}

.assessments-overview {
    display: flex;
    align-items: stretch;
    border: 1px solid grey; /* Gray border for the table-like design */
    border-radius: 5px; /* Rounded corners */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margin */
    margin-bottom: 24px;
}

.overview-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-right: 1px solid grey; /* Vertical partition lines */
    margin: 0; /* Remove margin */
}

.overview-item:last-child {
    border-right: none; /* Remove the right border from the last item */
}

.item-label {
    color: navy; /* Navy blue color for labels */
}

.item-value {
    margin-top: auto; /* Push the value to the bottom */
    font-weight: bold;
}
.my-assessment {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.assessment-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    margin-right: 15px;
    flex: 1;
}

.border-primary {
    border-color: blue;
}

.border-light {
    border-color: #ddd;
}

.circle-with-plus {
    font-size: 24px;
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.corner-icon {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  margin: 10px;
}

.more-icon {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  margin: 10px;
}

/* ... Rest of your styles ... */

.card-text {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
}

.card-subtext {
    font-size: 0.8rem;
    color: #777;
}

.break-line {
    border: none;
    border-top: 1px dashed #ccc;
    margin: 10px 0;
}

.info-section {
  display: flex;
    flex-direction: column; /* Set flex direction to column */
    align-items: flex-start; /* Align items to the start */
    margin: 10px 0;
}
.info-label {
    font-size: 0.8rem;
    color: #777;
    margin-top: 5px; /* Add space between label and value */
}

.info-value {
    font-weight: bold;
}

.share-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.share-icon {
    font-size: 24px;
}

.lp-background {
    background-color: blue;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
}
</style>